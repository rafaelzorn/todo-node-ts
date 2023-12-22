import { ITodoRepository } from '@/repositories/ITodoRepository'
import { IDeleteTodoService, Execute } from './IDeleteTodoService'
import { NotFoundError } from '@/errors/NotFoundError'
import { isNumber } from '@/utils/validate'

export class DeleteTodoService implements IDeleteTodoService {
  constructor(private todoRepository: ITodoRepository) {}

  async execute({ id }: Execute): Promise<void> {
    if (!isNumber({ value: id })) {
      throw new NotFoundError('Todo não encontrado.')
    }

    const todo = await this.todoRepository.find(id)

    if (!todo) {
      throw new NotFoundError('Todo não encontrado.')
    }

    await this.todoRepository.delete(id)
  }
}
