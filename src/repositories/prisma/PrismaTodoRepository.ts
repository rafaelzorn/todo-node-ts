import { prisma } from '@/database/client'
import { Todo } from '@/entities/Todo'
import { ITodoRepository } from '../ITodoRepository'

export class PrismaTodoRepository implements ITodoRepository {
  async get(): Promise<Todo[]> {
    return await prisma.todo.findMany()
  }

  async create({ description }: Todo): Promise<Todo> {
    const todo = await prisma.todo.create({
      data: { description },
    })

    return todo
  }

  async update(id: number, { description }: Todo): Promise<Todo | null> {
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        description,
      },
    })

    return todo
  }

  async find(id: number): Promise<Todo | null> {
    const todo = await prisma.todo.findUnique({
      where: {
        id,
      },
    })

    return todo
  }

  async delete(id: number): Promise<void> {
    await prisma.todo.delete({
      where: {
        id,
      },
    })
  }
}
