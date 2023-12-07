import axios from 'axios'

export const getTodosRequest = async () => await axios.get('http://localhost:4000/todos')

export const createTodoRequest = async todo => await axios.post('http://localhost:4000/todos', todo)
