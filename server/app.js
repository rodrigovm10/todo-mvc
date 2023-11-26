import express from 'express'
import todosRoutes from './routes/todos.routes.js'

const app = express()

// middlewares
app.use(express.json())

// routes
app.use(todosRoutes)

export default app
