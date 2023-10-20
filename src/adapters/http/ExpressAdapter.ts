import { Request as RequestExpress, Response as ResponseExpress } from 'express'
import { IHttpContext, Request, Response } from './IHttpContext'

export class ExpressAdapter implements IHttpContext {
  constructor(
    private requestExpress: RequestExpress,
    private responseExpress: ResponseExpress
  ) {}

  request(): Request {
    return {
      body: this.requestExpress.body,
    }
  }

  response({ data, status }: Response): void {
    this.responseExpress.status(status).json(data)
  }
}
