/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@/app'
import request from 'supertest'
import httpStatus from '@/constants/http-status'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { Todo } from '@/entities/Todo'

describe('Get Todos Controller', () => {
  let todoRepository: ITodoRepository

  beforeAll(async () => {
    todoRepository = new PrismaTodoRepository()
  })

  it('Should return all todos', async () => {
    await todoRepository.create({
      description: 'Sample Text 1',
    })

    await todoRepository.create({ description: 'Sample Text 2' })

    const response = await request(app).get('/todos')

    const todos = response.body

    expect(response.status).toBe(httpStatus.OK)
    expect(todos.length).toBe(2)

    todos.forEach((todo: Todo, index: number) => {
      expect(todo).toEqual({
        id: todos[index].id,
        description: todos[index].description,
      })
    })
  })
})
