import { Todo } from '@/entities/Todo'

export interface IGetTodosService {
  execute(): Promise<Todo[]>
}
