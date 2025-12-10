import { NextRequest, NextResponse } from "next/server";

// TODO: Implement proper text message handling for Agora Conversational AI
// The agent is configured for voice interactions via RTC channel
// Need to determine the correct way to send text messages to the agent session
// Options:
// 1. Use RTC data streams to send text through the channel
// 2. Use a REST API endpoint (if available in Agora docs)
// 3. Process text with LLM and broadcast response as TTS

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, agentId } = body;

    if (!message || !agentId) {
      return NextResponse.json(
        { error: "Message and agentId are required" },
        { status: 400 }
      );
    }

    // Placeholder - need to implement based on actual Agora API
    return NextResponse.json({
      error:
        "Text messaging not yet implemented. Need to determine correct Agora API endpoint or use RTC data streams.",
      message: message,
      agentId: agentId,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to send message",
        detail: error?.message,
      },
      { status: 500 }
    );
  }
}
