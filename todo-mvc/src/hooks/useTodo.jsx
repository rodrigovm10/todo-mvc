import { useContext, useEffect, useState } from 'react'
import { getTodosRequest, createTodoRequest, deleteTodoRequest, updateTodoRequest } from '../../api/todos'
import { TodoContext } from '../context/todoContext'

export function useTodo() {
	const { todos, setTodos } = useContext(TodoContext)
	const [todo, setTodo] = useState()
	const { length } = todos
	const [error, setError] = useState('')

	const getTodos = async () => {
		const res = await getTodosRequest()
		setTodos(res.data)
	}

	const createTodo = async todo => {
		const res = await createTodoRequest(todo)
		setTodos(prevTodos => [...prevTodos, res.data])
	}

	const deleteTodo = async id => {
		await deleteTodoRequest(id)
		setTodos(todos.filter(todo => todo.id !== id))
		setTodo(todos)
	}

	const updateTodo = async (id, todo) => {
		const res = await updateTodoRequest(id, todo)
		console.log(res)
	}

	useEffect(() => {
		getTodos()
	}, [todo])
	useEffect(() => {
		getTodos()
	}, [])

	return {
		getTodos,
		createTodo,
		setError,
		deleteTodo,
		setTodo,
		updateTodo,
		todos,
		error,
		length
	}
}
