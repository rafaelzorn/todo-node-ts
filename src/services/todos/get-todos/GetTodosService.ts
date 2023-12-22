import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'
import { IGetTodosService } from './IGetTodosService'

export class GetTodosService implements IGetTodosService {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.get()
  }
}
