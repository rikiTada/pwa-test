import next from "next";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ title: string; text: string; url: string }>;

export async function GET(_req: Request, segmentData: { params: Params }) {
  const params = await segmentData.params;
  const { title, text, url } = params;

  try {
    NextResponse.json(
      {
        title,
        text,
        url,
        message: "Hello, World!!",
      },
      { status: 200 }
    );

    return NextResponse.redirect(
      `/test?title=${title}&text=${text}&url=${url}`
    );
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
