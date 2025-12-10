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
  const clientRef = useRef<any>(null);

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
        // Enable audio PTS metadata for Conversational AI (required)
        (AgoraRTC as any).setParameter("ENABLE_AUDIO_PTS_METADATA", true);
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

        // Listen for remote audio tracks
        client.on("user-published", async (user: any, mediaType: string) => {
          if (mediaType === "audio" && isMounted) {
            try {
              await client!.subscribe(user, mediaType);
              const remoteTrack = user.audioTrack;
              if (remoteTrack && isMounted) {
                setRemoteAudioTrack(remoteTrack);
                remoteTrack.play();
              }
            } catch (error) {
              console.error("Error subscribing to remote audio:", error);
            }
          }
        });

        client.on("user-unpublished", (user: any, mediaType: string) => {
          if (mediaType === "audio" && isMounted) {
            setRemoteAudioTrack(null);
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

      if (clientRef.current) {
        const currentClient = clientRef.current;
        clientRef.current = null;
        currentClient.leave().catch(() => {
          // Ignore errors during cleanup
        });
      }

      setIsConnected(false);
      setLocalAudioTrack(null);
      setRemoteAudioTrack(null);
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
    client: clientRef.current,
  };
}
