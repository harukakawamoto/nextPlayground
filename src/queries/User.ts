import { gql } from "@apollo/client";

// ログインしているユーザーを取得するクエリ
export const GET_USER = gql`
  query getUser {
    viewer {
      login
    }
  }
`;
