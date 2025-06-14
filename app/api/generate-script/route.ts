import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
const textModel = 'gemini-2.5-flash-preview-04-17';

export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();
    let prompt = '';

    if (type === 'suplimax') {
      const { features, tone, audience, videoStyle, imageDescription } = data;
      prompt = `[Your Suplimax prompt template]`; // Use your existing prompt template
    } else if (type === 'realestate') {
      const { propertyDetails, tourStyle } = data;
      prompt = `[Your Real Estate prompt template]`; // Use your existing prompt template
    }

    const response = await ai.models.generateContent({
      model: textModel,
      contents: prompt,
    });

    return NextResponse.json({ script: response.text });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}