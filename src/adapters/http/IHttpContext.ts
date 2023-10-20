interface Request {
  body: any
}

interface Response {
  data: any
  status: number
}

interface IHttpContext {
  request(): Request
  response({ data, status }: Response): void
}

export { Request, Response, IHttpContext }
