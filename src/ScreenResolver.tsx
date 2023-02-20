import { useEffect } from 'react'
import { authActions } from './api-redux/auth'
import { useAppDispatch } from './redux/store'
import { screenMap } from './screenMap'
import { useSelectorNav } from './redux/selectors'

export const ScreenResolver = () => {
	const { page } = useSelectorNav()
	const dispatch = useAppDispatch()

	useEffect(() => {
		authActions.me(dispatch)
	}, [])

	return screenMap[page]
}
