import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type PlayerInfo = {
	points?: number
	username: string
}

export type Square = {
	state: string
	isTransition: boolean
}

type GameplayState = {
	board: Square[]
	hero: PlayerInfo
	opponent: PlayerInfo
	isTurn: boolean
	isFirst: boolean
}

type GameplayActions = {
	addBoardSquare: (index: number, num: string) => void
	setTransitionEnd: (index: number) => void
	setState: (state: Partial<GameplayState>) => void
}

export const useGameplayStore = create(
	immer<GameplayState & GameplayActions>((set) => ({
		board: getInitialBoard(),
		isTurn: false,
		isFirst: false,
		hero: {
			username: '',
			points: 0,
		},
		opponent: {
			username: '',
			points: 0,
		},
		addBoardSquare: (index, num) => {
			set((state) => {
				state.board[index] = {
					isTransition: true,
					state: num,
				}
			})
		},
		setTransitionEnd: (index) => {
			set((state) => {
				state.board[index].isTransition = false
			})
			console.log('Set transition to false')
		},
		setState: (state: Partial<GameplayState>) => {
			set((prev) => ({
				...prev,
				...state,
			}))
		}
	}))
)

function getInitialBoard() {
	return Array.from<Square>({ length: 42 }).fill({
		state: '0',
		isTransition: false,
	})
}
