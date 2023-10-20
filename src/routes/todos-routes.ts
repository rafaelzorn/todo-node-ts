import { Router, Request, Response } from 'express'
import { ExpressAdapter } from '@/adapters/http/ExpressAdapter'
import { getTodosFactory } from '@/modules/todos/get-todos/GetTodosFactory'
import { createTodoFactory } from '@/modules/todos/create-todo/CreateTodoFactory'

const todosRoutes = Router()

todosRoutes.get('/todos', (req: Request, res: Response) => {
  const expressAdapter = new ExpressAdapter(req, res)

  getTodosFactory().handle(expressAdapter)
})

todosRoutes.post('/todos', (req: Request, res: Response) => {
  const expressAdapter = new ExpressAdapter(req, res)

  createTodoFactory().handle(expressAdapter)
})

export { todosRoutes }
