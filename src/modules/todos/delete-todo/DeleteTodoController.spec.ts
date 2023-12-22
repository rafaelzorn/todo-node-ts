/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@/app'
import httpStatus from '@/constants/http-status'
import { PrismaTodoRepository } from '@/repositories/prisma/PrismaTodoRepository'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import request from 'supertest'

describe('Delete Todo Controller', () => {
  let todosRepository: ITodoRepository

  beforeAll(() => {
    todosRepository = new PrismaTodoRepository()
  })

  it('Should be able to delete a todo', async () => {
    todosRepository.create({ id: 1, description: 'Sample Text 1' })

    const response = await request(app).delete('/todos/1')

    expect(response.status).toBe(httpStatus.NO_CONTENT)
  })

  it('Should not be able to delete a todo with a invalid id', async () => {
    const response = await request(app).delete('/todos/123')

    expect(response.status).toBe(httpStatus.NOT_FOUND)
    expect(response.body.message).toBe('Todo não encontrado.')
  })
})
