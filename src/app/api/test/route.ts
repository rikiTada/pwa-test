import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ title: string; text: string; url: string }>;

export async function GET(_req: Request, segmentData: { params: Params }) {
  const params = await segmentData.params;
  const { title, text, url } = params;

  try {
    return NextResponse.json(
      {
        title,
        text,
        url,
        message: "Hello, World!!",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
