import { authApi } from '../api/auth'
import { LoginBody } from '../api/types'
import { setError, setUser } from '../redux/authSlice'
import { setPage } from '../redux/navigationSlice'
import { AppDispatch } from '../redux/store'

export const authActions = {
	login: (dispatch: AppDispatch, username: string) => {
		return authApi
			.login(username)
			.then((data) => {
				dispatch(setUser(data.data.user.username))
				dispatch(setPage('START_MENU'))
			})
			.catch((err) => {
				dispatch(setError('Something went wrong'))
			})
	},
	me: (dispatch: AppDispatch) => {
		return authApi
			.me()
			.then((data) => {
				dispatch(setUser(data.data.user.username))
				dispatch(setPage('START_MENU'))
			})
			.catch((err) => {
				dispatch(setPage('LOGIN'))
			})
	},
}
