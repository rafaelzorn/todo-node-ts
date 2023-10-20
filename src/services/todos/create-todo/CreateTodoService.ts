import { ITodosRepository } from '@/repositories/ITodosRepository'
import { Todo } from '@/entities/Todo'
import { ICreateTodoService, Execute } from './ICreateTodoService'

export class CreateTodoService implements ICreateTodoService {
  constructor(private todosRepository: ITodosRepository) {}

  async execute({ description }: Execute): Promise<Todo> {
    if (!description) {
      throw new Error('Campo descrição é obrigatório.')
    }

    const todo = Todo.create({ description })

    return await this.todosRepository.create(todo)
  }
}
