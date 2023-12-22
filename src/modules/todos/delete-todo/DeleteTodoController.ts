import { IHttpContext } from '@/adapters/http/IHttpContext'
import { IDeleteTodoService } from '@/services/todos/delete-todo/IDeleteTodoService'
import httpStatus from '@/constants/http-status'

class DeleteTodoController {
  constructor(private deleteTodoService: IDeleteTodoService) {}

  async handle(httpContext: IHttpContext) {
    const id = parseInt(httpContext.request().params.id)

    await this.deleteTodoService.execute({ id })

    return httpContext.response({ status: httpStatus.NO_CONTENT })
  }
}

export { DeleteTodoController }
