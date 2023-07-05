import { GetTodosController } from './GetTodosController'

export const getTodosFactory = () => {
  const getTodosController = new GetTodosController()

  return getTodosController
}
