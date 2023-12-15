import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { CreateTodoService } from '@/services/todos/create-todo/CreateTodoService'
import { CreateTodoController } from './CreateTodoController'

export const createTodoFactory = () => {
  const todosRepository = new PrismaTodoRepository()
  const createTodoService = new CreateTodoService(todosRepository)
  const createTodoController = new CreateTodoController(createTodoService)

  return createTodoController
}
