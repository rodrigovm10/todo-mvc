export function Toast({ id, t, toast, deleteTodo, name }) {
	return (
		<div>
			<p>
				¿Quiéres elimnar la tarea <strong>{name}</strong>?
			</p>
			<div className='flex gap-2 justify-center mt-5'>
				<button
					className='border-allports-600 bg-allports-600 text-white rounded-lg p-[6px] hover:bg-allports-700'
					onClick={() => {
						deleteTodo(id)
						toast.dismiss(t.id)
					}}
				>
					Eliminar
				</button>
				<button
					className='border-allports-700 border-2 rounded-lg p-[6px] text-allports-700 hover:bg-allports-50'
					onClick={() => toast.dismiss(t.id)}
				>
					Cancelar
				</button>
			</div>
		</div>
	)
}
