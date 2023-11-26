import axios from 'axios'

export const getTodosRequest = async () => await axios.get('http://localhost:4000/todos')
