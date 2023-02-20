import { socket } from '../socketio'
import { AppDispatch } from '../redux/store'
import { setPage } from '../redux/navigationSlice'
import { setBattleState } from '../redux/battleSlice'

export const battleActions = {
	join: (dispatch: AppDispatch, errCallback: () => void) => {
		const t = setTimeout(errCallback, 3000)
		socket.on('gameCreated', (result) => {
			if (result.ok) {
				clearTimeout(t)
				dispatch(setPage('WAITING_FOR_OPPONENT'))
			}
		})
		socket.on('gameState', (gameState) => {
			dispatch(
				setBattleState({
					...gameState,
					board: gameState.board.map((cell, i) => ({
						state: gameState.board[i],
						isTransition: i === gameState.last,
					})),
				})
			)
			dispatch(setPage('BATTLE'))
			// if (gameState.winner) {
			// 	alert(`${gameState.winner.userId} won `)
			// }
			// console.log(gameState)
		})
		socket.connect()
		socket.emit('createGame')
	},
}
