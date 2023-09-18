import { Response } from "@/types/response";
export type Props = {
  response: Response<{ viewer: { login: string } }>;
};

export const View: React.FC<Props> = (props) => {
  return (
    <>
      {props.response.type === "LOADING" ? <div>loading...</div> : null}
      {props.response.type === "ERROR" ? (
        <div>{props.response.message}</div>
      ) : null}
      {props.response.type === "DATA" ? (
        <div>
          <p>Hi {props.response.viewer.login}</p>
        </div>
      ) : null}
    </>
  );
};
