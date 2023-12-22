import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'
import { ICreateTodoService, Execute } from './ICreateTodoService'
import { UnprocessableEntityError } from '@/errors/UnprocessableEntityError'

export class CreateTodoService implements ICreateTodoService {
  constructor(private todoRepository: ITodoRepository) {}

  async execute({ description }: Execute): Promise<Todo> {
    if (!description) {
      throw new UnprocessableEntityError('Campo descrição é obrigatório.')
    }

    const todo = Todo.create({ description })

    return await this.todoRepository.create(todo)
  }
}
