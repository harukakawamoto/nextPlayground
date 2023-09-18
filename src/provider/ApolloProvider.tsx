"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_API,
  // ここでGitHubのアクセストークンを設定する
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export const ApolloProviderWrapper = ({
  children,
}: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
