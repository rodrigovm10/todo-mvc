import { Edit, Trash } from '../assets/Icons'
import { useTodo } from '../hooks/useTodo'
import { toast } from 'react-hot-toast'
import { Toast } from './Toast'
import { useState } from 'react'
import { FormEdit } from './FormEdit'

export function CardBody() {
	const { todos, length, deleteTodo } = useTodo()
	const [editingStates, setEditingStates] = useState(Array(todos.length).fill(false))

	const handleDelete = (id, name) => {
		toast(
			t => (
				<Toast
					deleteTodo={deleteTodo}
					id={id}
					t={t}
					toast={toast}
					name={name}
				/>
			),
			{
				style: {
					background: '#eff9fc'
				}
			}
		)
	}

	const handleToggleEditing = i => {
		setEditingStates(prevStates => prevStates.map((state, index) => (index === i ? !state : state)))
	}

	return (
		<article className='mt-6 overflow-y-scroll h-96'>
			{length !== 0 ? (
				<ul className='flex flex-col gap-2'>
					{todos.map((todo, i) => (
						<div
							key={todo?._id}
							className='flex justify-between border-b-[2px] border-allports-50 last-of-type:border-none'
						>
							<li>{todo.date}</li>
							{editingStates[i] ? (
								<FormEdit
									id={todo._id}
									todo={todo}
								/>
							) : (
								<li>{todo.name}</li>
							)}
							<article className='flex gap-3 mr-5'>
								<div
									onClick={() => handleToggleEditing(i)}
									className='cursor-pointer'
								>
									<Edit />
								</div>
								<div
									onClick={() => handleDelete(todo._id, todo.name)}
									className='cursor-pointer'
								>
									<Trash />
								</div>
							</article>
						</div>
					))}
				</ul>
			) : (
				<p>No hay tareas</p>
			)}
		</article>
	)
}
