import { Router, Request, Response } from 'express'
import { ExpressAdapter } from '@/adapters/http/ExpressAdapter'
import { getTodosFactory } from '@/modules/todos/get-todos/GetTodosFactory'
import { createTodoFactory } from '@/modules/todos/create-todo/CreateTodoFactory'
import { updateTodoFactory } from '@/modules/todos/update-todo/UpdateTodoFactory'
import asyncHandler from '@/middlewares/async-handler'

const todosRoutes = Router()

todosRoutes.get(
  '/todos',
  asyncHandler(async (req: Request, res: Response) => {
    const expressAdapter = new ExpressAdapter(req, res)

    await getTodosFactory().handle(expressAdapter)
  })
)

todosRoutes.post(
  '/todos',
  asyncHandler(async (req: Request, res: Response) => {
    const expressAdapter = new ExpressAdapter(req, res)

    await createTodoFactory().handle(expressAdapter)
  })
)

todosRoutes.put(
  '/todos/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const expressAdapter = new ExpressAdapter(req, res)

    await updateTodoFactory().handle(expressAdapter)
  })
)

export { todosRoutes }
