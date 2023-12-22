import { CreateTodoService } from './CreateTodoService'
import { Execute } from './ICreateTodoService'
import { TodoRepositoryInMemory } from '@/repositories/in-memory/TodoRepositoryInMemory'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'

describe('Create Todo', () => {
  let todoRepository: ITodoRepository
  let createTodoService: CreateTodoService

  beforeAll(() => {
    todoRepository = new TodoRepositoryInMemory()
    createTodoService = new CreateTodoService(todoRepository)
  })

  it('Should be able to create a new todo', async () => {
    const todoData: Execute = {
      description: 'Sample Text',
    }

    const todo: Todo = await createTodoService.execute(todoData)

    expect(todo).toEqual({
      id: todo.id,
      description: todo.description,
    })
  })

  it('should not be able to create a todo without description', async () => {
    const todoData: Execute = {
      description: '',
    }

    await expect(createTodoService.execute(todoData)).rejects.toEqual(
      new Error('Campo descrição é obrigatório.')
    )
  })
})
