import { CreateTodoService } from './CreateTodoService'
import { TodosRepositoryInMemory } from '@/repositories/in-memory/TodosRepositoryInMemory'
import { ITodosRepository } from '@/repositories/ITodosRepository'
import { Todo } from '@/entities/Todo'

describe('Create Todo', () => {
  let todosRepository: ITodosRepository
  let createTodoService: CreateTodoService

  beforeAll(() => {
    todosRepository = new TodosRepositoryInMemory()
    createTodoService = new CreateTodoService(todosRepository)
  })

  it('Should be able to create a new todo', async () => {
    const todoData: Todo = {
      description: 'Sample Text',
    }

    const todo: Todo = await createTodoService.execute(todoData)

    expect(todo).toEqual({
      id: todo.id,
      description: todo.description,
    })
  })

  it('should not be able to create a todo without description', async () => {
    const todoData: Todo = {
      description: '',
    }

    await expect(createTodoService.execute(todoData)).rejects.toEqual(
      new Error('Campo descrição é obrigatório.')
    )
  })
})
