export type Response<T> =
  | {
      type: 'LOADING'
    }
  | {
      type: 'ERROR'
      message: string
    }
  | ({
      type: 'DATA'
    } & T)
