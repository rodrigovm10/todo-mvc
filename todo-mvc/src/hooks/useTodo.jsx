import { useContext, useEffect } from 'react'
import { getTodosRequest } from '../../api/todos'
import { TodoContext } from '../context/todoContext'

export function useTodo() {
	const { todos, setTodos } = useContext(TodoContext)

	useEffect(() => {
		getTodos()
	}, [])

	const getTodos = async () => {
		const res = await getTodosRequest()
		console.log(res.data)
		setTodos(res.data)
	}

	return { getTodos, todos }
}
