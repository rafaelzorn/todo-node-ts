import { Todo } from '@/entities/Todo'

export interface ITodosRepository {
  get(): Promise<Todo[]>
}
