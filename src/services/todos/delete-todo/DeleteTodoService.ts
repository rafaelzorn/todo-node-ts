import { ITodoRepository } from '@/repositories/ITodoRepository'
import { IDeleteTodoService, Execute } from './IDeleteTodoService'
import { NotFoundError } from '@/errors/NotFoundError'
import { isNumber } from '@/utils/validate'

export class DeleteTodoService implements IDeleteTodoService {
  constructor(private todosRepository: ITodoRepository) {}

  async execute({ id }: Execute): Promise<void> {
    if (!isNumber({ value: id })) {
      throw new NotFoundError('Todo não encontrado.')
    }

    const todo = await this.todosRepository.find(id)

    if (!todo) {
      throw new NotFoundError('Todo não encontrado.')
    }

    await this.todosRepository.delete(id)
  }
}
