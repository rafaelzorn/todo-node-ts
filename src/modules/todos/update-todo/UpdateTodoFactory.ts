import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { UpdateTodoService } from '@/services/todos/update-todo/UpdateTodoService'
import { UpdateTodoController } from './UpdateTodoController'

export const updateTodoFactory = () => {
  const todosRepository = new PrismaTodoRepository()
  const updateTodoService = new UpdateTodoService(todosRepository)
  const updateTodoController = new UpdateTodoController(updateTodoService)

  return updateTodoController
}
