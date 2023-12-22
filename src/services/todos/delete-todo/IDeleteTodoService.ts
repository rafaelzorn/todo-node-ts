export interface Execute {
  id: number
}

export interface IDeleteTodoService {
  execute({ id }: Execute): Promise<void>
}
