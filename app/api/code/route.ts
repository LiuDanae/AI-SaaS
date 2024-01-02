import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi,ChatCompletionRequestMessage } from "openai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

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
    const freeTrial=checkApiLimit()
    if(!freeTrial){
      return new NextResponse("Free trial has expired. Please upgrade to pro",{status:403})
    }
    const response=await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
       messages: [instructionMessage, ...messages]
  })
  await incrementApiLimit()
      return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log("====================================");
    console.log("[CODE ERROR]", error);
    console.log("====================================");
    return new NextResponse("Internal error", { status: 500 });
  }
}
