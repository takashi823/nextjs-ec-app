
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([{
    name: "胡麻鯖セット",
    price: 5000,
}, {
    name: "明太子詰め合わせ",
    price: 6000
}]);
}
