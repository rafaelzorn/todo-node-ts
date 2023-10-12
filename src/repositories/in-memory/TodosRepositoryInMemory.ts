import { Todo } from '@/entities/Todo'
import { ITodosRepository } from '../ITodosRepository'

export class TodosRepositoryInMemory implements ITodosRepository {
  private todos: Todo[] = []

  async get(): Promise<Todo[]> {
    return this.todos
  }

  async create(todo: Todo): Promise<Todo> {
    this.todos.push(todo)

    return todo
  }
}
