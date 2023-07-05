import { Router, Request, Response } from 'express'
import { getTodosFactory } from '@/modules/todos/getTodos/GetTodosFactory'

const todosRoutes = Router()

todosRoutes.post('/', (req: Request, res: Response) =>
  getTodosFactory().handle(req, res)
)

export { todosRoutes }
