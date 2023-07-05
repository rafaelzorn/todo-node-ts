interface Request {
  body: any
}

interface IHttpContext {
  request(): Request
  response(data: any, status: number): void
}

export { Request, IHttpContext }
