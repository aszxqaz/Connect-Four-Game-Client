import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type PlayerInfo = {
	points?: number
	username: string
}

export type Square = {
	state: string
	isTransition: boolean
}

type BattleState = {
	board: Square[]
	hero: PlayerInfo
	opponent: PlayerInfo
	isTurn: boolean
	isFirst: boolean
}

const initialState: BattleState = {
	board: [],
	hero: {
		username: '',
		points: 0,
	},
	opponent: {
		username: '',
		points: 0,
	},
	isFirst: false,
	isTurn: false,
}

export const battleSlice = createSlice({
	name: 'battle',
	initialState,
	reducers: {
		setState: (state, action: PayloadAction<BattleState>) => {
			return Object.assign(state, action.payload)
		},
		setTransitionEnd: (state, action: PayloadAction<number>) => {
			state.board[action.payload].isTransition = false
		},
	},
})

export const { setState: setBattleState, setTransitionEnd } =
	battleSlice.actions
export const battleReducer = battleSlice.reducer
