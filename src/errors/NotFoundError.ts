import httpStatus from '@/constants/http-status'

export class NotFoundError extends Error {
  status: number

  constructor(message: string) {
    super(message)

    this.message = message
    this.status = httpStatus.NOT_FOUND
  }
}
