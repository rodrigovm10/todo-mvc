import { useEffect, useState } from 'react'
import { DAYS, MONTHS } from '../utilities/constants'

export function useDate() {
	const [today, setToday] = useState()

	const getDateToday = () => {
		const date = new Date()
		const day = date.getDay()
		const month = date.getMonth()
		setToday({ dayName: DAYS[day], dayNumber: date.getDate(), month: MONTHS[month] })
	}

	const getDate = () => {
		const date = new Date()
		return date
	}

	const dateCreated = () => {
		const date = getDate()
		return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
	}

	useEffect(getDateToday, [])

	return { today, dateCreated }
}
