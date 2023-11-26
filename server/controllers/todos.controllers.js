import Todo from '../models/Todo.js'

export const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find()
		res.send(todos)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

export const createTodos = async (req, res) => {
	try {
		const { name, description, date } = req.body
		const newTodo = new Todo({ name, description, date })
		await newTodo.save()
		return res.json(newTodo)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

export const updateTodo = async (req, res) => {
	try {
		const todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!todoUpdated) return res.sendStatus(404)
		return res.send(todoUpdated)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

export const deleteTodo = async (req, res) => {
	try {
		const todoDeleted = await Todo.findByIdAndDelete(req.params.id)
		if (!todoDeleted) return res.sendStatus(404)
		return res.sendStatus(204)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}

export const getTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id)
		if (!todo) return res.sendStatus(404)
		return res.json(todo)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}
