import { Router } from 'express'
import { getTodos, createTodos, updateTodo, deleteTodo, getTodo } from '../controllers/todos.controllers.js'
const router = Router()

router.get('/todos', getTodos)

router.post('/todos', createTodos)

router.put('/todos/:id', updateTodo)

router.delete('/todos/:id', deleteTodo)

router.get('/todos/:id', getTodo)

export default router
