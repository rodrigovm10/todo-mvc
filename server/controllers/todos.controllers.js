import Todo from '../models/Todo.js'

export const getTodos = async (req, res) => {
  const todos = await Todo.find()
  res.send(todos)
}

export const createTodos = async (req, res) => {
  const { name, description, date } = req.body

  const newTodo = new Todo({ name, description, date })

  await newTodo.save()
  return res.json(newTodo)
}

export const updateTodo = async (req, res) => {
  const todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if (!todoUpdated) return res.sendStatus(404)

  return res.sendStatus(204)
}

export const deleteTodo = async (req, res) => {
  const todoDeleted = await Todo.findByIdAndDelete(req.params.id)

  if (!todoDeleted) return res.sendStatus(404)

  return res.sendStatus(204)
}

export const getTodo = async (req, res) => {
  const todo = Todo.findById(req.params.id)

  if (!todo) return res.sendStatus(404)

  return res.json(todo)
}
