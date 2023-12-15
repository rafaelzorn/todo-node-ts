import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { GetTodosService } from '@/services/todos/get-todos/GetTodosService'
import { GetTodosController } from './GetTodosController'

export const getTodosFactory = () => {
  const todosRepository = new PrismaTodoRepository()
  const getTodosService = new GetTodosService(todosRepository)
  const getTodosController = new GetTodosController(getTodosService)

  return getTodosController
}
