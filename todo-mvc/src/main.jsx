import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TodoProvider } from './context/todoContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<TodoProvider>
		<App />
	</TodoProvider>
)
