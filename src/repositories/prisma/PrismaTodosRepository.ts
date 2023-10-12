import { prisma } from '@/database/client'
import { Todo } from '@/entities/Todo'
import { ITodosRepository } from '../ITodosRepository'

export class PrismaTodosRepository implements ITodosRepository {
  async get(): Promise<Todo[]> {
    return await prisma.todo.findMany()
  }

  async create(todo: Todo): Promise<Todo> {}
}
