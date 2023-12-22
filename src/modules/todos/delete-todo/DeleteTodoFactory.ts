import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { DeleteTodoService } from '@/services/todos/delete-todo/DeleteTodoService'
import { DeleteTodoController } from './DeleteTodoController'

export const deleteTodoFactory = () => {
  const todosRepository = new PrismaTodoRepository()
  const deleteTodoService = new DeleteTodoService(todosRepository)
  const deleteTodoController = new DeleteTodoController(deleteTodoService)

  return deleteTodoController
}
