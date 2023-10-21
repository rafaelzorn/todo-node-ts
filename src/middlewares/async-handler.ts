import { NextFunction, Response, Request } from 'express'

interface Fn {
  (req: Request, res: Response, next: NextFunction): Promise<void>
}

export default (fn: Fn) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
