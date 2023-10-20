import { PrismaTodosRepository } from '@/repositories/prisma/PrismaTodosRepository'
import { CreateTodoService } from '@/services/todos/create-todo/CreateTodoService'
import { CreateTodoController } from './CreateTodoController'

export const createTodoFactory = () => {
  const todosRepository = new PrismaTodosRepository()
  const createTodoService = new CreateTodoService(todosRepository)
  const createTodosController = new CreateTodoController(createTodoService)

  return createTodosController
}
