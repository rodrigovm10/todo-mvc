import { HomePage, NotFoundPage } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '*',
		element: <NotFoundPage />
	}
])

export default function App() {
	return <RouterProvider router={router} />
}
