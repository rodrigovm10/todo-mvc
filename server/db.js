import moongose from 'mongoose'
import { MONGODB_URI } from './config.js'

export async function connectDB() {
	try {
		const db = await moongose.connect(MONGODB_URI)
		console.log('Connected to ', db.connection.name)
	} catch (error) {
		console.error(error)
	}
}
