import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { DeleteTodoService } from '@/services/todos/delete-todo/DeleteTodoService'
import { DeleteTodoController } from './DeleteTodoController'

export const deleteTodoFactory = () => {
  const todoRepository = new PrismaTodoRepository()
  const deleteTodoService = new DeleteTodoService(todoRepository)
  const deleteTodoController = new DeleteTodoController(deleteTodoService)

  return deleteTodoController
}
