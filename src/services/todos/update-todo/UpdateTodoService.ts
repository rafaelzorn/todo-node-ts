import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'
import { IUpdateTodoService, Execute } from './IUpdateTodoService'
import { UnprocessableEntityError } from '@/errors/UnprocessableEntityError'
import { NotFoundError } from '@/errors/NotFoundError'
import { isNumber } from '@/utils/validate'

export class UpdateTodoService implements IUpdateTodoService {
  constructor(private todosRepository: ITodoRepository) {}

  async execute({ id, description }: Execute): Promise<Todo | null> {
    if (!isNumber({ value: id })) {
      throw new NotFoundError('Todo não encontrado.')
    }

    if (!description) {
      throw new UnprocessableEntityError('Campo descrição é obrigatório.')
    }

    let todo = await this.todosRepository.find(id)

    if (!todo) {
      throw new NotFoundError('Todo não encontrado.')
    }

    todo = Todo.create({ description })

    return await this.todosRepository.update(id, todo)
  }
}
