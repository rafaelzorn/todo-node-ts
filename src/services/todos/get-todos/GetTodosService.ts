import { IGetTodosService } from './IGetTodosService'
import { ITodosRepository } from '@/repositories/ITodosRepository'

export class GetTodosService implements IGetTodosService {
  constructor(private todosRepository: ITodosRepository) {}

  execute(): Array<string> {
    return this.todosRepository.get()
  }
}
