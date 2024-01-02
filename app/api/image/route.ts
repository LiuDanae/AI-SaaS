import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi,ChatCompletionRequestMessage } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
};
//从服务器发送到前端网页
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!configuration.apiKey) {
      return new NextResponse("OpenAi not configured", { status: 400 });
    }
    if (!messages) {
      return new NextResponse("Codes are required", { status: 400 });
    }
    const response=await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
       messages: [instructionMessage, ...messages]
  })
      return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log("====================================");
    console.log("[CODE ERROR]", error);
    console.log("====================================");
    return new NextResponse("Internal error", { status: 500 });
  }
}
