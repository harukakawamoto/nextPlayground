import { useSession } from "next-auth/react";

export const useProps = () => {
  const { data: session } = useSession();
  return {
    session,
  };
};
