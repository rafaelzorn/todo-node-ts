import { Todo } from '@/entities/Todo'

export interface Execute {
  description: string
}

export interface ICreateTodoService {
  execute({ description }: Execute): Promise<Todo>
}
