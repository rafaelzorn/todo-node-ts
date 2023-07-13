import { ITodosRepository } from '@/repositories/ITodosRepository'
import { Todo } from '@/entities/Todo'
import { IGetTodosService } from './IGetTodosService'

export class GetTodosService implements IGetTodosService {
  constructor(private todosRepository: ITodosRepository) {}

  async execute(): Promise<Todo[]> {
    return await this.todosRepository.get()
  }
}
