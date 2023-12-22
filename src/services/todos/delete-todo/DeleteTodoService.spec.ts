import { DeleteTodoService } from './DeleteTodoService'
import { Execute } from './IDeleteTodoService'
import { TodoRepositoryInMemory } from '@/repositories/in-memory/TodoRepositoryInMemory'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'

describe('Delete Todo', () => {
  let todoRepository: ITodoRepository
  let deleteTodoService: DeleteTodoService

  beforeAll(() => {
    todoRepository = new TodoRepositoryInMemory()
    deleteTodoService = new DeleteTodoService(todoRepository)
  })

  it('Should be able to delete a todo', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const execute: Execute = {
      id: 1,
    }

    await deleteTodoService.execute(execute)

    const todo: Todo | null = await todoRepository.find(1)

    expect(todo).toEqual(null)
  })

  it('Should not be able to delete a todo with a non-existent id', async () => {
    await todoRepository.create({ id: 1, description: 'Sample Text 1' })

    const execute: Execute = {
      id: 2,
    }

    await expect(deleteTodoService.execute(execute)).rejects.toEqual(
      new Error('Todo não encontrado.')
    )
  })
})
