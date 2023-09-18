import { useQuery } from "@apollo/client";
import { GET_USER } from "@/queries/User";
import { useEffect, useState } from "react";
import { Props } from "./view";

export const useProps = () => {
  const [response, setResponse] = useState<Props["response"]>({
    type: "LOADING",
  });

  const { data, loading, error } = useQuery(GET_USER);

  useEffect(() => {
    if (loading) {
      setResponse({ type: "LOADING" });
    } else if (error) {
      setResponse({ type: "ERROR", message: error.message });
    } else {
      setResponse({ type: "DATA", viewer: data.viewer });
    }
  }, [loading, error, data]);

  return { response };
};
