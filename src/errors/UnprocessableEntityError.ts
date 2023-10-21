import httpStatus from '@/constants/http-status'

export class UnprocessableEntityError extends Error {
  status: number

  constructor(message: string) {
    super(message)

    this.message = message
    this.status = httpStatus.UNPROCESSABLE_ENTITY
  }
}
