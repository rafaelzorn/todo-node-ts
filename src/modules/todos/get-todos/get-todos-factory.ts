import { PrismaTodosRepository } from '@/repositories/prisma/PrismaTodosRepository'
import { GetTodosService } from '@/services/todos/get-todos/GetTodosService'
import { GetTodosController } from './GetTodosController'

export const getTodosFactory = () => {
  const todosRepository = new PrismaTodosRepository()
  const getTodosService = new GetTodosService(todosRepository)
  const getTodosController = new GetTodosController(getTodosService)

  return getTodosController
}
