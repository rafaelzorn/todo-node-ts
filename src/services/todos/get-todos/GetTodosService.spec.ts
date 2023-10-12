import { GetTodosService } from './GetTodosService'
import { TodosRepositoryInMemory } from '@/repositories/in-memory/TodosRepositoryInMemory'
import { Todo } from '@/entities/Todo'

describe('Get Todos', () => {
  let todosRepository: TodosRepositoryInMemory

  beforeAll(() => {
    todosRepository = new TodosRepositoryInMemory()

    const createTodo = (id: number, text: string) =>
      todosRepository.create({ id, text })

    createTodo(1, 'Texto de exemplo 1')
    createTodo(2, 'Texto de exemplo 2')
  })

  it('Should return all todos', async () => {
    const getTodosService = new GetTodosService(todosRepository)

    const todos: Todo[] = await getTodosService.execute()

    todos.forEach((todo: Todo, index: number) => {
      expect(todo).toHaveProperty('id')
      expect(todo).toHaveProperty('text')

      expect(todo.id).toBe(todos[index].id)
      expect(todo.text).toBe(todos[index].text)
    })
  })
})
