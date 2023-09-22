import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>
        このサイトは面白そうなライブラリやフレームワークを試すためのサイトです。
      </h1>
      <div>
        <Link href="/github">GitHubのGraphQL APIを試す</Link>
      </div>
      <div>
        <Link href="/login">NextAuthを試す</Link>
      </div>
    </>
  );
}
