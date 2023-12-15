import { Todo } from '@/entities/Todo'

export interface Execute {
  id: number
  description: string
}

export interface IUpdateTodoService {
  execute({ id, description }: Execute): Promise<Todo | null>
}
