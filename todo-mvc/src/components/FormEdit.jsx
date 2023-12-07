import { useTodo } from '../hooks/useTodo'
import { Formik, Form as FormFormik, Field } from 'formik'

export function FormEdit({ todo, id }) {
	const { updateTodo } = useTodo()

	return (
		<>
			<Formik
				className='flex flex-col justify-center items-center'
				initialValues={{
					name: todo.name,
					completed: false
				}}
				onSubmit={async (values, { resetForm }) => {
					await updateTodo(id, values)
					// setTodo(values)
					resetForm()
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
					</FormFormik>
				)}
			</Formik>
		</>
	)
}
