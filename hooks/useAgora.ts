"use client";

import { useState, useEffect, useRef } from "react";

interface UseAgoraProps {
  appId: string;
  channel: string;
  token: string;
  uid: number;
}

export function useAgora({ appId, channel, token, uid }: UseAgoraProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Microphone enabled by default (not muted)
  const [localAudioTrack, setLocalAudioTrack] = useState<any>(null);
  const [remoteAudioTrack, setRemoteAudioTrack] = useState<any>(null);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState<any>(null);
  const clientRef = useRef<any>(null);
  const virtualBackgroundExtensionRef = useRef<any>(null);
  const virtualBackgroundProcessorRef = useRef<any>(null);

  useEffect(() => {
    // Don't initialize if we don't have valid config or if we're on the server
    if (
      typeof window === "undefined" ||
      !appId ||
      !channel ||
      !token ||
      uid === 0 ||
      !appId.trim() ||
      !channel.trim() ||
      !token.trim()
    ) {
      return;
    }

    let isMounted = true;
    let audioTrack: any = null;
    let client: any = null;

    const init = async () => {
      try {
        // Dynamically import AgoraRTC only on the client
        const AgoraRTC = (await import("agora-rtc-sdk-ng")).default;
        // Enable audio PTS metadata for Conversational AI (REQUIRED for ASR to work!)
        // This must be set BEFORE creating the client
        (AgoraRTC as any).setParameter("ENABLE_AUDIO_PTS_METADATA", true);

        // Register Virtual Background Extension
        try {
          const VirtualBackgroundExtension = (
            await import("agora-extension-virtual-background")
          ).default;

          if (VirtualBackgroundExtension) {
            const extension = new VirtualBackgroundExtension();
            if (extension.checkCompatibility()) {
              AgoraRTC.registerExtensions([extension]);
              virtualBackgroundExtensionRef.current = extension;
              console.log("[useAgora] Virtual Background Extension registered");
            } else {
              console.warn(
                "[useAgora] Virtual Background Extension not supported in this browser"
              );
            }
          }
        } catch (extError) {
          console.warn(
            "[useAgora] Failed to load virtual background extension:",
            extError
          );
        }

        client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        clientRef.current = client;

        // Join the channel
        await client.join(appId, channel, token, uid);

        if (!isMounted) {
          // Component unmounted during join, cleanup
          await client.leave().catch(() => {});
          return;
        }

        setIsConnected(true);

        // Create and publish local audio track
        audioTrack = await AgoraRTC.createMicrophoneAudioTrack();

        if (!isMounted) {
          // Component unmounted during track creation, cleanup
          audioTrack.close();
          await client.leave().catch(() => {});
          return;
        }

        await client.publish([audioTrack]);
        setLocalAudioTrack(audioTrack);

        // Listen for remote audio and video tracks
        client.on("user-published", async (user: any, mediaType: string) => {
          if (isMounted) {
            try {
              await client!.subscribe(user, mediaType);

              if (mediaType === "audio") {
                const remoteTrack = user.audioTrack;
                if (remoteTrack && isMounted) {
                  setRemoteAudioTrack(remoteTrack);
                  // Wait a bit to ensure track is fully ready before playing
                  // This prevents race condition where audio doesn't play on first load
                  setTimeout(() => {
                    if (isMounted && remoteTrack) {
                      try {
                        const playResult = remoteTrack.play();
                        // play() might return a promise or undefined
                        if (
                          playResult &&
                          typeof playResult.catch === "function"
                        ) {
                          playResult.catch((error: any) => {
                            console.error(
                              "Error playing remote audio track:",
                              error
                            );
                          });
                        }
                      } catch (error: any) {
                        console.error(
                          "Error playing remote audio track:",
                          error
                        );
                      }
                    }
                  }, 100);
                }
              } else if (mediaType === "video") {
                const remoteTrack = user.videoTrack;
                if (remoteTrack && isMounted) {
                  // Apply virtual background extension with green color to remote video track
                  try {
                    if (virtualBackgroundExtensionRef.current) {
                      // Create processor for remote video track
                      const processor =
                        virtualBackgroundExtensionRef.current.createProcessor();

                      // Initialize the processor
                      await processor.init();

                      // For remote tracks, use insertProcessor method
                      if (typeof remoteTrack.insertProcessor === "function") {
                        remoteTrack.insertProcessor(processor);

                        // Set green background color (RGB: 0, 255, 0)
                        await processor.setOptions({
                          type: "color",
                          color: "#00FF00", // Green color in hex
                        });

                        // Enable the processor
                        await processor.enable();

                        virtualBackgroundProcessorRef.current = processor;
                        console.log(
                          "[useAgora] Virtual background with green color applied to remote video using insertProcessor"
                        );
                      } else if (
                        remoteTrack.pipe &&
                        remoteTrack.processorDestination
                      ) {
                        // Fallback: try pipe method (typically for local tracks)
                        remoteTrack
                          .pipe(processor)
                          .pipe(remoteTrack.processorDestination);
                        await processor.setOptions({
                          type: "color",
                          color: "#00FF00",
                        });
                        await processor.enable();
                        virtualBackgroundProcessorRef.current = processor;
                        console.log(
                          "[useAgora] Virtual background applied using pipe method"
                        );
                      } else {
                        console.warn(
                          "[useAgora] Remote video track does not support processors"
                        );
                        processor.destroy();
                      }
                    }
                  } catch (bgError) {
                    console.error(
                      "[useAgora] Failed to apply virtual background:",
                      bgError
                    );
                  }

                  setRemoteVideoTrack(remoteTrack);
                }
              }
            } catch (error) {
              console.error(`Error subscribing to remote ${mediaType}:`, error);
            }
          }
        });

        client.on("user-unpublished", (user: any, mediaType: string) => {
          if (isMounted) {
            if (mediaType === "audio") {
              setRemoteAudioTrack(null);
            } else if (mediaType === "video") {
              const remoteTrack = user.videoTrack;
              if (remoteTrack) {
                // Clean up virtual background processor if it exists
                if (virtualBackgroundProcessorRef.current) {
                  try {
                    virtualBackgroundProcessorRef.current.disable();
                    virtualBackgroundProcessorRef.current.destroy();
                  } catch (e) {
                    // Ignore cleanup errors
                  }
                  virtualBackgroundProcessorRef.current = null;
                }
                remoteTrack.stop();
              }
              setRemoteVideoTrack(null);
            }
          }
        });
      } catch (error: any) {
        // Ignore OPERATION_ABORTED errors (happens when component unmounts during init)
        if (error?.code !== "OPERATION_ABORTED" && isMounted) {
          console.error("Agora initialization error:", error);
        }
        if (isMounted) {
          setIsConnected(false);
        }
      }
    };

    init();

    return () => {
      isMounted = false;

      // Cleanup
      if (audioTrack) {
        audioTrack.close();
        audioTrack = null;
      }

      // Clean up virtual background processor
      if (virtualBackgroundProcessorRef.current) {
        try {
          virtualBackgroundProcessorRef.current.disable();
          virtualBackgroundProcessorRef.current.destroy();
        } catch (e) {
          // Ignore cleanup errors
        }
        virtualBackgroundProcessorRef.current = null;
      }

      if (clientRef.current) {
        const currentClient = clientRef.current;
        // Clean up video tracks before leaving
        currentClient.remoteUsers?.forEach((user: any) => {
          if (user.videoTrack) {
            user.videoTrack.stop();
          }
        });
        clientRef.current = null;
        currentClient.leave().catch(() => {
          // Ignore errors during cleanup
        });
      }

      setIsConnected(false);
      setLocalAudioTrack(null);
      setRemoteAudioTrack(null);
      setRemoteVideoTrack(null);
    };
  }, [appId, channel, token, uid]);

  const toggleMute = async () => {
    if (localAudioTrack) {
      await localAudioTrack.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const leave = async () => {
    if (localAudioTrack) {
      localAudioTrack.close();
      setLocalAudioTrack(null);
    }
    if (clientRef.current) {
      await clientRef.current.leave();
      setIsConnected(false);
    }
  };

  return {
    isConnected,
    isMuted,
    toggleMute,
    leave,
    localAudioTrack,
    remoteAudioTrack,
    remoteVideoTrack,
    client: clientRef.current,
  };
}
