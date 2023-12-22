import { Router, Request, Response } from 'express'
import { ExpressAdapter } from '@/adapters/http/ExpressAdapter'
import { getTodosFactory } from '@/modules/todos/get-todos/GetTodosFactory'
import { createTodoFactory } from '@/modules/todos/create-todo/CreateTodoFactory'
import { updateTodoFactory } from '@/modules/todos/update-todo/UpdateTodoFactory'
import { deleteTodoFactory } from '@/modules/todos/delete-todo/DeleteTodoFactory'
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

todosRoutes.delete(
  '/todos/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const expressAdapter = new ExpressAdapter(req, res)

    await deleteTodoFactory().handle(expressAdapter)
  })
)

export { todosRoutes }
