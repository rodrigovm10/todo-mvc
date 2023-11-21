import express from 'express'
import todosRoutes from './routes/todos.routes.js'

const app = express()

app.use(todosRoutes)

app.listen(3000)
console.log('Server is running port', 3000)
