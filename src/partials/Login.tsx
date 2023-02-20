import { useState } from 'react'
import { Dialog, Heading, MainMenuButton, TextInput } from '../components'
import { useGlobalStore } from '../store/global'
import { ErrorMessage } from '../components/ErrorMessage'
import { authActions } from '../api-redux/auth'
import { useAppDispatch } from '../redux/store'

export const Login = () => {
	// const [login] = useGlobalStore((state) => [state.login]);
	const [username, setUsername] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')

	const dispatch = useAppDispatch()

	return (
		<Dialog>
			<Heading size="lg">Enter your name:</Heading>
			<div>
				<TextInput
					autoFocus
					name="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>
				<ErrorMessage>{error}</ErrorMessage>
			</div>
			<MainMenuButton
				disabled={isSubmitting}
				variant="primary"
				onClick={() => {
					if (username.length < 2) {
						setError('Too short bro')
						return
					}
					setIsSubmitting(true)
					authActions.login(dispatch, username).finally(() => {
						setIsSubmitting(false)
					})
				}}>
				Okay, let's play
			</MainMenuButton>
		</Dialog>
	)
}
