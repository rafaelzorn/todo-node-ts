import { Todo } from '@/entities/Todo'

export interface ITodoRepository {
  get(): Promise<Todo[]>
  create(todo: Todo): Promise<Todo>
  update(id: number, todo: Todo): Promise<Todo | null>
  find(id: number): Promise<Todo | null>
  delete(id: number): Promise<void>
}
