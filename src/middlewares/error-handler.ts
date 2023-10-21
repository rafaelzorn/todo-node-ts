import { Response, Request, NextFunction } from 'express'
import httpStatus from '@/constants/http-status'

interface CustomError {
  message: string
  status: number
}

export default (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err) {
    next()
  } else {
    const message = err.message ? err.message : err
    const status = err.status ? err.status : httpStatus.INTERNAL_SERVER_ERROR

    res.status(status).json({ message })
  }
}
