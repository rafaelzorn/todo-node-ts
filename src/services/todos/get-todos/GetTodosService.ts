import { ITodoRepository } from '@/repositories/ITodoRepository'
import { Todo } from '@/entities/Todo'
import { IGetTodosService } from './IGetTodosService'

export class GetTodosService implements IGetTodosService {
  constructor(private todosRepository: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return await this.todosRepository.get()
  }
}
