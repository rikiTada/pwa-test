import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  try {
    return NextResponse.json({ message: "hello,world" }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
