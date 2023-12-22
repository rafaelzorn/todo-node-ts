import { UpdateTodoService } from './UpdateTodoService'
import { Execute } from './IUpdateTodoService'
import { TodoRepositoryInMemory } from '@/repositories/in-memory/TodoRepositoryInMemory'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'

describe('Update Todo', () => {
  let todoRepository: ITodoRepository
  let updateTodoService: UpdateTodoService

  beforeAll(() => {
    todoRepository = new TodoRepositoryInMemory()
    updateTodoService = new UpdateTodoService(todoRepository)
  })

  it('Should be able to update a todo', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const todoData: Execute = {
      id: 1,
      description: 'Sample Text 2',
    }

    const todo: Todo | null = await updateTodoService.execute(todoData)

    expect(todo).toEqual({
      id: todoData.id,
      description: todoData.description,
    })
  })

  it('should not be able to update a todo without description', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const todoData: Execute = {
      id: 1,
      description: '',
    }

    await expect(updateTodoService.execute(todoData)).rejects.toEqual(
      new Error('Campo descrição é obrigatório.')
    )
  })

  it('Should not be able to update a todo with a non-existent id', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const todoData: Execute = {
      id: 2,
      description: 'Sample Text 3',
    }

    await expect(updateTodoService.execute(todoData)).rejects.toEqual(
      new Error('Todo não encontrado.')
    )
  })
})
