import { useState } from 'react'
import { useDate } from '../hooks/useDate'
import { Plus } from '../assets/Icons'
import { Form } from './Form'
import { useTodo } from '../hooks/useTodo'

export function CardHeader() {
	const { today } = useDate()
	const { length } = useTodo()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<article className='flex justify-between gap-5 border-b-2 pb-4 mb-6'>
				<section className='flex flex-col gap-2'>
					<h2 className='text-allports-800 font-semibold text-xl'>
						{today?.dayName}, <span className='font-medium'>{today?.dayNumber}</span>
					</h2>
					<p className='text-gray-400 text-xs'>{today?.month}</p>
				</section>
				<section>
					<span className='text-gray-400 text-xs animate-wiggle'>{length} tareas</span>
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
		</>
	)
}
