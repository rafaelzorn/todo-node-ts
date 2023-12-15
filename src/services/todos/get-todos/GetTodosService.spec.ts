import { GetTodosService } from './GetTodosService'
import { TodoRepositoryInMemory } from '@/repositories/in-memory/TodoRepositoryInMemory'
import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'

describe('Get Todos', () => {
  let todosRepository: ITodoRepository
  let getTodosService: GetTodosService

  beforeAll(() => {
    todosRepository = new TodoRepositoryInMemory()
    getTodosService = new GetTodosService(todosRepository)
  })

  it('Should return all todos', async () => {
    await todosRepository.create({ description: 'Sample Text 1' })
    await todosRepository.create({ description: 'Sample Text 2' })

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
