import { useSession } from "next-auth/react";
import { Props } from "./View";
export const useProps = (): Props => {
  const { data: session } = useSession();
  const user = session?.user;
  console.log("in useProps", user);
  return {
    session,
    user,
  };
};
