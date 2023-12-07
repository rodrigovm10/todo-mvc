import { motion } from 'framer-motion'
import { useTodo } from '../hooks/useTodo'
import { useDate } from '../hooks/useDate'
import { Formik, Form as FormFormik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export function Form() {
	const { setTodo, createPost } = useTodo()
	const { dateCreated } = useDate()

	return (
		<motion.section
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
		>
			<Formik
				className='flex flex-col justify-center items-center'
				initialValues={{
					name: '',
					date: dateCreated(),
					completed: false
				}}
				validationSchema={yup.object({ name: yup.string().required('No puedes guardar una tarea vacía') })}
				onSubmit={async values => {
					await createPost(values)
					setTodo(values)
				}}
			>
				{({ handleSubmit }) => (
					<FormFormik
						onSubmit={handleSubmit}
						className='flex flex-col items-center	'
					>
						<Field
							placeholder='Hacer tarea...'
							name='name'
							className='w-full border-2 border-allports-300 p-1 rounded-md'
						/>
						<ErrorMessage
							name='name'
							component='p'
							className='text-sm mt-4 text-red-600'
						/>
					</FormFormik>
				)}
			</Formik>
		</motion.section>
	)
}
