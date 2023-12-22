import { GetTodosService } from './GetTodosService'
import { TodoRepositoryInMemory } from '@/repositories/in-memory/TodoRepositoryInMemory'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'

describe('Get Todos', () => {
  let todoRepository: ITodoRepository
  let getTodosService: GetTodosService

  beforeAll(() => {
    todoRepository = new TodoRepositoryInMemory()
    getTodosService = new GetTodosService(todoRepository)
  })

  it('Should return all todos', async () => {
    await todoRepository.create({ description: 'Sample Text 1' })
    await todoRepository.create({ description: 'Sample Text 2' })

    const todos: Todo[] = await getTodosService.execute()

    expect(todos.length).toBe(2)

    todos.forEach((todo: Todo, index: number) => {
      expect(todo).toEqual({
        id: todos[index].id,
        description: todos[index].description,
      })
    })
  })
})
