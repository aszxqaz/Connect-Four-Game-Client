import { create } from 'zustand'
import { api } from '../api/http'
import { AppSocket, ClientToServer, ServerToClient } from '../socketio'
import { Square } from './types'
import { useGameplayStore } from './gameplay'

// export const useGameplayStore = create((set) => ({
// 	cursor: 0,
// 	isTurn: true,
// 	board: new Array<Array<boolean | null>>(6)
// 		.fill([null])
// 		.map((_) => new Array<boolean | null>(7).fill(null)),
// }))

type GlobalState = {
	state: 'MAIN_MENU' | 'PENDING' | 'PLAYING' | 'END' | 'LOGIN' | 'GAME_RULES'
	username: string | null
	me: () => Promise<void | { user: { username: string } } | { error: any }>
	startVsCPU: () => void
	startVsPlayer: (
		socket: AppSocket,
		callback: ServerToClient['gameCreated']
	) => void
	login: (
		username: string
	) => Promise<void | { user: { username: string } } | { error: any }>
	wasAuth: boolean
	cursor: number
	board: Square[]
}

export const useGlobalStore = create<GlobalState>((set, get) => ({
	state: 'MAIN_MENU',
	wasAuth: false,
	board: Array.from<Square>({ length: 42 }).fill({
		state: null,
		isTransition: false,
	}),
	cursor: 0,
	username: null,
	me: () => {
		return api.me().then((data) => {
			if ('user' in data) {
				set({
					username: data.user.username,
					state: 'MAIN_MENU',
					wasAuth: true,
				})
			}
			if ('error' in data) {
				set({
					state: 'LOGIN',
					wasAuth: true,
				})
			}
		})
	},
	startVsCPU: () => {
		console.log('boo')
		set({ ...get(), state: 'PLAYING' })
	},
	login: async (username: string) => {
		return api.login(username).then((data) => {
			if ('user' in data) {
				set({
					username: data.user.username,
					state: 'MAIN_MENU',
					wasAuth: true,
				})
			}
			if ('error' in data) {
				set({
					state: 'LOGIN',
					wasAuth: false,
				})
			}
		})
	},
	startVsPlayer: (
		socket: AppSocket,
		callback: ServerToClient['gameCreated']
	) => {
		socket.on('gameCreated', (result) => {
			callback(result)
			if (result.ok) {
				set({ state: 'PENDING' })
			}
		})
		socket.on('gameState', (gameState) => {
			const board = useGameplayStore.getState().board
			useGameplayStore.getState().setState({
				...gameState,
				board: board.map((cell, i) =>
					cell.state !== gameState.board[i]
						? { state: gameState.board[i], isTransition: i === gameState.last }
						: cell
				),
			})
			set({ state: 'PLAYING' })
			if(gameState.winner) {
					alert(`${gameState.winner.userId} won `)
			}
			console.log(gameState)
		})
		socket.connect()
		socket.emit('createGame')
	},
}))
