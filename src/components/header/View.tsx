import Link from "next/link";
import { Session } from "next-auth";

export type Props = {
  session?: Session | null;
  user?:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
};

export const View: React.FC<Props> = (props) => {
  return (
    <header>
      <h1>
        <Link href="/">Homeに戻る</Link>
      </h1>
    </header>
  );
};
