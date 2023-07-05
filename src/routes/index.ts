import { Express } from 'express'
import { todosRoutes } from './todos-routes'

export default (app: Express) => {
  app.use(todosRoutes)
}
