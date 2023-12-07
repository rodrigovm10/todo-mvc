import { useTodo } from '../hooks/useTodo'

export function CardBody() {
	const { todos, length, checkedState, changeCheckbox } = useTodo()

	const handleOnChange = i => {
		changeCheckbox(i)
	}
	return (
		<article className='mt-6'>
			{length !== 0 && (
				<ul className='flex flex-col gap-2'>
					{todos.map((todo, i) => (
						<div
							key={todo._id}
							className='flex justify-between border-b-[2px] border-allports-50 last-of-type:border-none'
						>
							<input
								type='checkbox'
								checked={checkedState[i]}
								onChange={() => handleOnChange(i)}
								className='bg-allports-200'
							/>
							<li className={checkedState[i] ? 'line-through text-allports-600 opacity-30 ' : ''}>{todo.name}</li>
							<li className={checkedState[i] ? 'text-allports-600 opacity-30' : ''}>{todo.date}</li>
						</div>
					))}
				</ul>
			)}
		</article>
	)
}
