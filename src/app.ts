import express from 'express'
import router from '@/routes'
import errorHandler from '@/middlewares/error-handler'

const app = express()

app.use(express.json())

router(app)

app.use(errorHandler)

export { app }
