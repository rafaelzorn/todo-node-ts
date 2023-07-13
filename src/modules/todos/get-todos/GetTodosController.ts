import { IHttpContext } from '@/adapters/http/IHttpContext'
import { IGetTodosService } from '@/services/todos/get-todos/IGetTodosService'
import httpStatus from '@/constants/http-status'

class GetTodosController {
  constructor(private getTodosService: IGetTodosService) {}

  async handle(httpContext: IHttpContext) {
    const todos = await this.getTodosService.execute()

    return httpContext.response({ todos }, httpStatus.OK)
  }
}

export { GetTodosController }
