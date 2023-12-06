import { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { useTodo } from '../hooks/useTodo'
import { days, months } from '../utilities/constants'
import { Plus } from '../assets/Icons'

export function HomePage() {
	const { todos } = useTodo()
	const { length } = todos
	const [today, setToday] = useState()
	const [checkedState, setCheckedState] = useState(new Array(length).fill(false))
	const [isOpen, setIsOpen] = useState(false)

	const handleOnChange = position => {
		const updatedCheckedState = checkedState.map((item, i) => (i === position ? !item : item))

		setCheckedState(updatedCheckedState)
	}
	const getDateToday = () => {
		const date = new Date()
		const day = date.getDay()
		const month = date.getMonth()
		setToday({ dayName: days[day], dayNumber: date.getDate(), month: months[month] })
	}

	useEffect(getDateToday, [])

	return (
		<main className='flex flex-col justify-center items-center h-96 w-1/2 m-auto bg-allports-500'>
			<section className='bg-white rounded-lg p-5 w-10/12 relative'>
				<article className='flex justify-between gap-5 border-b-2 pb-4'>
					<section className='flex flex-col gap-2'>
						<h2 className='text-allports-800 font-semibold text-xl'>
							{today?.dayName}, <span className='font-medium'>{today?.dayNumber}</span>
						</h2>
						<p className='text-gray-400 text-xs'>{today?.month}</p>
					</section>
					<section>
						<span className='text-gray-400 text-xs'>{todos.length} tareas</span>
						<article className='absolute top-[70px]'>
							<div
								className='bg-allports-400 rounded-full p-0 w-9 h-9 relative cursor-pointer'
								onClick={() => {
									setIsOpen(!isOpen)
								}}
							>
								<div className='absolute top-[9px] left-[9px]'>
									<Plus />
								</div>
							</div>
						</article>
					</section>
				</article>
				{isOpen && <Form />}
				<article className='mt-6'>
					{length !== 0 && (
						<ul className='flex flex-col gap-2'>
							{todos.map((todo, i) => (
								<div
									key={todo.id}
									className='flex justify-between'
								>
									<input
										type='checkbox'
										checked={checkedState[i]}
										onChange={() => handleOnChange(i)}
										className='bg-allports-800'
									/>
									<li className={checkedState[i] ? 'line-through text-allports-600 opacity-30' : ''}>{todo.name}</li>
									<li className={checkedState[i] ? 'text-allports-600 opacity-30' : ''}>{todo.date}</li>
								</div>
							))}
						</ul>
					)}
				</article>
			</section>
			{/* 
			<h1 className='text-2xl font-medium'>{length === 0 ? "No hay ToDo's" : "ToDo's"}</h1> */}
		</main>
	)
}
