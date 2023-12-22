import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { UpdateTodoService } from '@/services/todos/update-todo/UpdateTodoService'
import { UpdateTodoController } from './UpdateTodoController'

export const updateTodoFactory = () => {
  const todoRepository = new PrismaTodoRepository()
  const updateTodoService = new UpdateTodoService(todoRepository)
  const updateTodoController = new UpdateTodoController(updateTodoService)

  return updateTodoController
}
