/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import { app } from '@/app'
import request from 'supertest'
import httpStatus from '@/constants/http-status'
import { PrismaTodosRepository } from '@/repositories/prisma/PrismaTodosRepository'
import { Todo } from '@/entities/Todo'

describe('Get Todos Controller', () => {
  beforeAll(() => {
    const todosRepository = new PrismaTodosRepository()

    const createTodo = (id: number, text: string) =>
      todosRepository.create({ id, text })

    createTodo(1, 'Texto de exemplo 1')
    createTodo(2, 'Texto de exemplo 2')
  })

  it('Should return all todos', async () => {
    const response = await request(app).get('/todos')

    expect(response.status).toBe(httpStatus.OK)

    const todos = response.body.todos

    todos.forEach((todo: Todo, index: number) => {
      expect(todo).toHaveProperty('id')
      expect(todo).toHaveProperty('text')

      expect(todo.id).toBe(todos[index].id)
      expect(todo.text).toBe(todos[index].text)
    })
  })
})
