/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@/app'
import httpStatus from '@/constants/http-status'
import request from 'supertest'

describe('Create Todo Controller', () => {
  it('Should be able to create a new todo', async () => {
    const response = await request(app).post('/todos').send({
      description: 'Sample Text',
    })

    const todo = response.body

    expect(response.status).toBe(httpStatus.OK)
    expect(todo).toEqual({
      id: todo.id,
      description: todo.description,
    })
  })

  it('should not be able to create a todo without description', async () => {
    const response = await request(app).post('/todos').send({
      description: '',
    })

    expect(response.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
    expect(response.body.message).toBe('Campo descrição é obrigatório.')
  })
})
