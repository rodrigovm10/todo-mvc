import { useTodo } from '../hooks/useTodo'

export function HomePage() {
	const { todos } = useTodo()
	if (todos.length === 0) {
		return (
			<main className='flex justify-center items-center h-96'>
				<h1 className='text-2xl font-medium'>{"No hay ToDo's"}</h1>
			</main>
		)
	}

	return (
		<main className='flex flex-col justify-center items-center h-96'>
			<h1 className='text-2xl font-medium'>{"ToDo's"}</h1>
			<ul>
				{todos.map(todo => (
					<div
						key={todo.id}
						className='flex gap-4'>
						<li>{todo.name}</li>
						<input type='checkbox' />
					</div>
				))}
			</ul>
		</main>
	)
}
