import { CardHeader } from '../components/CardHeader'
import { CardBody } from '../components/CardBody'
import { Toaster } from 'react-hot-toast'

export function HomePage() {
	return (
		<main className='flex flex-col justify-center items-center w-3/5 m-auto	'>
			<section className='bg-white rounded-lg p-5 w-10/12 relative  shadow-2xl'>
				<CardHeader />
				<CardBody />
				<Toaster />
			</section>
		</main>
	)
}
