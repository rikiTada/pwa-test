import next from "next";
import { NextRequest, NextResponse } from "next/server";

type TestProps = { title: string; text: string; url: string };

type Params = Promise<Partial<TestProps>>;

export async function GET(req: Request, segmentData: { params: Params }) {
  const request = await req.json();
  const params = await segmentData.params;

  try {
    return NextResponse.json(
      {
        request: { ...request },
        params: { ...params },
        message: "Hello, World!!",
      },
      { status: 200 }
    );

    // return NextResponse
    //   .redirect
    //   // `/test?title=${title}&text=${text}&url=${url}`
    //   ();
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
