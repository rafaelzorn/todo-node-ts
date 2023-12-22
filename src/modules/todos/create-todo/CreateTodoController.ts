import { IHttpContext } from '@/adapters/http/IHttpContext'
import { ICreateTodoService } from '@/services/todos/create-todo/ICreateTodoService'
import httpStatus from '@/constants/http-status'

class CreateTodoController {
  constructor(private createTodoService: ICreateTodoService) {}

  async handle(httpContext: IHttpContext) {
    const { description } = httpContext.request().body

    const todo = await this.createTodoService.execute({ description })

    return httpContext.response({ data: todo, status: httpStatus.CREATED })
  }
}

export { CreateTodoController }
