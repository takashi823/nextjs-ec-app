import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      name: "胡麻鯖セット",
      price: 5000,
    },
    {
      id:2,
      name: "明太子詰め合わせ",
      price: 6000,
    },
  ]);
}
