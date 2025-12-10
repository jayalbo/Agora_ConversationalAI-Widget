import axios from "axios";
import pkg from "agora-token";
const { RtcTokenBuilder, RtcRole } = pkg;

const APP_ID = process.env.AGORA_APP_ID;
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE;
const API_KEY = process.env.AGORA_API_KEY;
const API_SECRET = process.env.AGORA_API_SECRET;

function assertAgoraEnv() {
  if (!APP_ID || !APP_CERTIFICATE || !API_KEY || !API_SECRET) {
    throw new Error(
      "Missing Agora credentials. Please set AGORA_APP_ID, AGORA_APP_CERTIFICATE, AGORA_API_KEY, AGORA_API_SECRET."
    );
  }
}

// Generate RTC token using Agora's official SDK
export function generateToken(channelName: string, uid: number) {
  assertAgoraEnv();
  if (!APP_ID || !APP_CERTIFICATE) {
    throw new Error("Missing APP_ID or APP_CERTIFICATE");
  }

  const role = RtcRole.PUBLISHER;
  const expirationTimeInSeconds = 3600;
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid,
    role,
    privilegeExpiredTs,
    privilegeExpiredTs
  );

  return token;
}

// Process chat message using LLM directly (for text fallback)
export async function processChatMessage(
  message: string,
  context: string,
  productId: string
) {
  try {
    const llmUrl =
      process.env.LLM_URL || "https://api.openai.com/v1/chat/completions";
    const llmApiKey = process.env.LLM_API_KEY || "";
    const llmModel = process.env.LLM_MODEL || "gpt-4o-mini";

    const response = await axios.post(
      llmUrl,
      {
        model: llmModel,
        messages: [
          {
            role: "system",
            content: context,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${llmApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      response:
        response.data.choices[0]?.message?.content ||
        "I'm sorry, I couldn't process that message.",
    };
  } catch (error: any) {
    console.error("Chat error:", error?.response?.data || error?.message);
    return {
      response:
        "I'm having trouble processing that right now. Could you rephrase your question about the product?",
    };
  }
}
