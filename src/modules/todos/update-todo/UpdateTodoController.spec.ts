/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@/app'
import httpStatus from '@/constants/http-status'
import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import request from 'supertest'

describe('Update Todo Controller', () => {
  let todoRepository: ITodoRepository

  beforeAll(() => {
    todoRepository = new PrismaTodoRepository()
  })

  it('Should be able to update a todo', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const response = await request(app).put('/todos/1').send({
      description: 'Sample Text 2',
    })

    const todo = response.body

    expect(response.status).toBe(httpStatus.OK)
    expect(todo).toEqual({
      id: todo.id,
      description: todo.description,
    })
  })

  it('Should not be able to update a todo with a invalid id', async () => {
    const response = await request(app).put('/todos/ABC').send({
      description: 'Sample Text 1',
    })

    expect(response.status).toBe(httpStatus.NOT_FOUND)
    expect(response.body.message).toBe('Todo não encontrado.')
  })

  it('should not be able to update a todo without description', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const response = await request(app).put('/todos/1').send({
      description: '',
    })

    expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
    expect(response.body.message).toBe('Campo descrição é obrigatório.')
  })
})
