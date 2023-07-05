import { IHttpContext } from '@/adapters/http/IHttpContext'

class GetTodosController {
  constructor() {}

  async handle(httpContext: IHttpContext) {
    return httpContext.response({}, 200)
  }
}

export { GetTodosController }
