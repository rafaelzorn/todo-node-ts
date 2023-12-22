import { Todo } from '@/entities/Todo'
import { ITodoRepository } from '../ITodoRepository'

export class TodoRepositoryInMemory implements ITodoRepository {
  private todos: Todo[] = []

  async get(): Promise<Todo[]> {
    return this.todos
  }

  async create(todo: Todo): Promise<Todo> {
    this.todos.push(todo)

    return todo
  }

  async update(id: number, { description }: Todo): Promise<Todo | null> {
    const todo = this.todos.find((todo: Todo) => todo.id === id)

    if (!todo) {
      return null
    }

    todo.description = description

    return todo
  }

  async find(id: number): Promise<Todo | null> {
    const todo = this.todos.find((todo: Todo) => todo.id === id)

    if (!todo) {
      return null
    }

    return todo
  }

  async delete(id: number): Promise<void> {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }
}
