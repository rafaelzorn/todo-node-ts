import { IHttpContext } from '@/adapters/http/IHttpContext'
import { IUpdateTodoService } from '@/services/todos/update-todo/IUpdateTodoService'
import httpStatus from '@/constants/http-status'

class UpdateTodoController {
  constructor(private updateTodoService: IUpdateTodoService) {}

  async handle(httpContext: IHttpContext) {
    const id = parseInt(httpContext.request().params.id)
    const { description } = httpContext.request().body

    const todo = await this.updateTodoService.execute({ id, description })

    return httpContext.response({ data: todo, status: httpStatus.OK })
  }
}

export { UpdateTodoController }
