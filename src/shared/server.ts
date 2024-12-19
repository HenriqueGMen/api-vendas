import express from 'express'
import cors from 'cors'
import { routes } from './http'
import ErrorMiddleware from './middlewares/errorMiddleware'

const app = express()
const errorMiddleware = new ErrorMiddleware()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errorMiddleware.handle)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
