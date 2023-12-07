import { CardHeader } from '../components/CardHeader'
import { CardBody } from '../components/CardBody'

export function HomePage() {
	return (
		<main className='flex flex-col justify-center items-center h-96 w-1/2 m-auto bg-allports-500'>
			<section className='bg-white rounded-lg p-5 w-10/12 relative'>
				<CardHeader />
				<CardBody />
			</section>
			{/* 
			<h1 className='text-2xl font-medium'>{length === 0 ? "No hay ToDo's" : "ToDo's"}</h1> */}
		</main>
	)
}
