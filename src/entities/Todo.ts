class Todo {
  id?: number
  description: string

  private constructor({ id, description }: Todo) {
    this.id = id
    this.description = description
  }

  static create({ id, description }: Todo) {
    return new Todo({ id, description })
  }
}

export { Todo }
