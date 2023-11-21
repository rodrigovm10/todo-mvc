import { Router } from 'express'

const router = Router()

router.get('/todos', (req, res) => res.send([]))

router.post('/todos', (req, res) => res.send('new todo created'))

router.put('/todos', (req, res) => res.send('updating a todo'))

router.delete('/todos', (req, res) => res.send('deleting a post'))

router.get('/post/:id', (req, res) => res.send('getting a post'))

export default router
