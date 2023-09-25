import { NextResponse } from "next/server";

import { getServerSession } from "next-auth/next";
import { options } from "../options";

export async function GET() {
  // sessionを取得する。
  const session = await getServerSession(options);

  // ユーザー情報取得
  //   console.log("in GET", session?.user);

  return NextResponse.json({ message: "ok" });
}
