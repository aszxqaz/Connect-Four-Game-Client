import { MouseEventHandler, useCallback, useContext } from 'react'
import { MechanicsContext } from '../App'
import { CounterLarge } from '../icons/CounterLargeSVG'
import { MotionCounter } from '../motions/MotionCounter'
import { useGlobalStore } from '../store/global'
import { Board } from './Board'
import { Color, colors } from '../components/constants'
import { useGameplayStore } from '../store/gameplay'
import { TurnPlate } from '../components'
import { PlayerPlate } from '../components/PlayerPlate'
import { PlayerFirst } from '../c_icons/PlayerFirst'
import { PlayerSecond } from '../c_icons/PlayerSecond'
import styled from 'styled-components'
import { socket } from '../socketio'
import { useSelectorBattle } from '../redux/selectors'

export const Battle = () => {
	const game = useSelectorBattle()

	const player1 = game.isFirst ? game.hero : game.opponent
	const player2 = player1 === game.hero ? game.opponent : game.hero

	console.log(player1)
	console.log(player2)

	const clickHandler: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect()
		const index = Math.trunc(
			(e.clientX - rect.left) / ((rect.right - rect.left) / 7)
		)
		socket.emit('action', index)
	}, [])

	return (
		<div
			style={{ position: 'relative', margin: 'auto' }}
			onClick={clickHandler}>
			<Board>
				{Array.from({ length: 42 })
					.fill(0)
					.map((_, i) => (
						<MotionCounter key={i} index={i} />
					))}
			</Board>
			{game.isTurn ? (
				<TurnPlateWrapper>
					<TurnPlate
						title="Your turn"
						colorScheme={game.isFirst ? 'pink' : 'green'}
						content="15s"
					/>
				</TurnPlateWrapper>
			) : null}
			<LeftPlateWrapper>
				<PlayerPlate
					content={(player1.points || 0).toString()}
					title={player1.username}
					icon={<PlayerFirst />}
				/>
			</LeftPlateWrapper>
			<RightPlateWrapper>
				<PlayerPlate
					reversed={true}
					content={(player2.points || 0).toString()}
					title={player2.username}
					icon={<PlayerSecond />}
				/>
			</RightPlateWrapper>
		</div>
	)
}

const LeftPlateWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	transform: translateY(-150%);

	@media (min-width: 768px) {
		transform: translateY(-125%);
	}

	@media (min-width: 1100px) {
		top: 50%;
		transform: translate(-150%, -50%);
	}
`

const RightPlateWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	transform: translateY(-150%);

	@media (min-width: 768px) {
		transform: translateY(-125%);
	}

	@media (min-width: 1100px) {
		top: 50%;
		transform: translate(150%, -50%);
	}
`

const TurnPlateWrapper = styled.div`
	position: absolute;
	top: 90%;
	left: 50%;
	transform: translateX(-50%);
`
