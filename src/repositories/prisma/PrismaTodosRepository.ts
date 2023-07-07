import { ITodosRepository } from '../ITodosRepository'

export class PrismaTodosRepository implements ITodosRepository {
  get(): Array<string> {
    return ['todo-1', 'todo-2']
  }
}
