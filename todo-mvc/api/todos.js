import axios from 'axios'

export const getTodosRequest = async () => await axios.get('http://localhost:4000/todos')

export const createTodoRequest = async todo => await axios.post('http://localhost:4000/todos', todo)

export const deleteTodoRequest = async id => await axios.delete(`http://localhost:4000/todos/${id}`)

export const updateTodoRequest = async (id, todo) => await axios.put(`http://localhost:4000/todos/${id}`, todo)
