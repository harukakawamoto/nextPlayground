"use client";

import { LoginButton, LogoutButton } from "../../components/buttons";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        {user ? <div>{user.name}さんがログインしました</div> : null}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </main>
  );
}
