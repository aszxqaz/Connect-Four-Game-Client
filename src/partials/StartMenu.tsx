import styled from 'styled-components'
import { LogoSVG } from '../icons/Logo'
import { VsCPU_SVG } from '../icons/PlayerVsCPU'
import { VsPlayerSVG } from '../icons/VsPlayer'
import { Dialog, MainMenuButton } from '../components'
import { useGlobalStore } from '../store/global'
import { useEffect, useState } from 'react'
import { socket } from '../socketio'
import { useAppDispatch } from '../redux/store'
import { battleActions } from '../api-redux/battle'
import { setPage } from '../redux/navigationSlice'

const Logo = styled(LogoSVG)`
	margin-top: 20px;
	margin-bottom: 40px;
`

export const StartMenu = () => {
	// const [startVsCPU, startVsPlayer] = useGlobalStore((state) => [
	//   state.startVsCPU,
	//   state.startVsPlayer,
	// ]);
	const [isSubmitting, setIsSubmitting] = useState(false)
	const dispatch = useAppDispatch()

	//   useEffect(() => {
	//     socket.connect();
	//   }, []);

	return (
		<Dialog isCollapsedAtMobile>
			<Logo />
			<MainMenuButton
				variant="danger"
				icon={<VsCPU_SVG />}
				// onClick={startVsCPU}
			>
				Play vs CPU
			</MainMenuButton>
			<MainMenuButton
				disabled={isSubmitting}
				variant="primary"
				icon={<VsPlayerSVG />}
				onClick={() => {
					setIsSubmitting(true)
					battleActions.join(dispatch, () => {
						alert('error')
					})
				}}>
				Play vs Player
			</MainMenuButton>
			<MainMenuButton
				align="start"
				onClick={() => {
					dispatch(setPage('GAME_RULES'))
				}}>
				Game Rules
			</MainMenuButton>
		</Dialog>
	)
}
