import { Router, Request, Response } from 'express'
import { ExpressAdapter } from '@/adapters/http/ExpressAdapter'
import { getTodosFactory } from '@/modules/todos/get-todos/get-todos-factory'

const todosRoutes = Router()

todosRoutes.get('/todos', (req: Request, res: Response) => {
  const expressAdapter = new ExpressAdapter(req, res)

  getTodosFactory().handle(expressAdapter)
})

export { todosRoutes }
