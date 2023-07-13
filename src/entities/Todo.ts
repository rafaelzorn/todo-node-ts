class Todo {
  id?: number
  text: string

  private constructor({ id, text }: Todo) {
    this.id = id
    this.text = text
  }

  static create({ id, text }: Todo) {
    return new Todo({ id, text })
  }
}

export { Todo }
