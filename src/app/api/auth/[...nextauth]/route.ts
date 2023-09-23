import { options } from "@/app/options";
import NextAuth from "next-auth";

const handler = NextAuth(options);

// GETリクエストがAPIルートに来たとき、handlerを実行する。
// POSTリクエストがAPIルートに来たとき、handlerを実行する。
export { handler as GET, handler as POST };
