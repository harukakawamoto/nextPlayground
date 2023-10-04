"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API,
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloProviderWrapper = ({
  children,
}: React.PropsWithChildren) => {
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user?.accessToken) {
      sessionStorage.setItem("accessToken", session.user.accessToken);
    }
  }, [session]);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
