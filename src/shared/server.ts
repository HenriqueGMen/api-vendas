import express from 'express'
import cors from 'cors'
import { routes } from './http'
import ErrorMiddleware from './middlewares/errorMiddleware'

const app = express()
const errorMiddleware = new ErrorMiddleware()

app.use(cors())
app.use(routes)

app.use(errorMiddleware.handle)

app.listen(3333, () => {
  console.log('Server is running!!!')
})
