import { CheckSvg } from '../c_icons/CheckSvg'
import { Dialog, Heading } from '../components'
import CircleButton from '../components/CircleButton'
import { colors } from '../components/constants'
import { setPage } from '../redux/navigationSlice'
import { useAppDispatch } from '../redux/store'

export const GameRules = () => {
	const dispatch = useAppDispatch()
	return (
		<Dialog
			colorScheme="whiteGrey"
			style={{
				borderRadius: '40px',
				position: 'relative',
				padding: '25px 25px 60px 25px',
			}}>
			<Heading color={colors.black}>RULES</Heading>
			<div>
				<Heading color={colors.lightblue} size="medium" align="left">
					Objective
				</Heading>
				<p>
					Be the first player to connect 4 of the same colored discs in a row
					(either vertically, horizontally, or diagonally).
				</p>
			</div>
			<div>
				<Heading color={colors.lightblue} size="medium" align="left">
					How to play
				</Heading>
				<ol>
					<li>Red goes first in the first game.</li>
					<li>
						Players must alternate turns, and only one disc can be dropped in
						each turn.
					</li>
					<li>The game ends when there is a 4-in-a-row or a stalemate.</li>
					<li>
						The starter of the previous game goes second on the next game.
					</li>
				</ol>
			</div>
			<CircleButton
				onClick={() => {
					dispatch(setPage('START_MENU'))
				}}
				style={{
					position: 'absolute',
					left: '50%',
					bottom: 0,
					transform: 'translate(-50%, 50%)',
				}}>
				<CheckSvg />
			</CircleButton>
		</Dialog>
	)
}
