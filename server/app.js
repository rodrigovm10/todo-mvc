import express from 'express'
import cors from 'cors'
import todosRoutes from './routes/todos.routes.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use(todosRoutes)

export default app
