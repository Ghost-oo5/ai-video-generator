import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
const imageModel = 'imagen-3.0-generate-002';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    const response = await ai.models.generateImages({
      model: imageModel,
      prompt: prompt,
      config: { numberOfImages: 1, outputMimeType: 'image/jpeg' },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0]?.image?.imageBytes;
      return NextResponse.json({ 
        image: `data:image/jpeg;base64,${base64ImageBytes}`
      });
    }
    
    return NextResponse.json(
      { error: 'No image generated' },
      { status: 500 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}