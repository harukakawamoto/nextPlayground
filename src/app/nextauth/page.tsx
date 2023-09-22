import { LoginButton, LogoutButton } from "../../components/buttons";

export default async function Login() {
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
        <LoginButton />
        <LogoutButton />
      </div>
    </main>
  );
}
