import { useContext, useEffect, useState } from 'react'
import { getTodosRequest, createTodoRequest } from '../../api/todos'
import { TodoContext } from '../context/todoContext'

export function useTodo() {
	const { todos, setTodos } = useContext(TodoContext)
	const [todo, setTodo] = useState()
	const { length } = todos
	const [checkedState, setCheckedState] = useState(new Array(length).fill(false))
	const [error, setError] = useState('')

	const getTodos = async () => {
		const res = await getTodosRequest()
		setTodos(res.data)
	}

	const createPost = async todo => {
		console.log(todo)
		await createTodoRequest(todo)
	}

	useEffect(() => {
		getTodos()
	}, [todo])

	const changeCheckbox = position => {
		const updatedCheckedState = checkedState.map((item, i) => (i === position ? !item : item))
		console.log(position)
		console.log(updatedCheckedState)
		setCheckedState(updatedCheckedState)
	}

	return {
		getTodos,
		createPost,
		setError,
		changeCheckbox,
		setTodo,
		todos,
		error,
		length,
		checkedState
	}
}
