import { Request, Response } from 'express'

class GetTodosController {
  constructor() {}

  async handle(request: Request, response: Response) {
    return response.json('todos')
  }
}

export { GetTodosController }
