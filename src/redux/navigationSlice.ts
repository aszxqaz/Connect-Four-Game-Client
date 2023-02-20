import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Page =
	| 'LOADING'
	| 'START_MENU'
	| 'BATTLE'
	| 'LOGIN'
	| 'GAME_RULES'
	| 'WAITING_FOR_OPPONENT'

type NavigationState = {
	page: Page
}

const initialState: NavigationState = {
	page: 'LOADING',
}

export const navigationSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<Page>) => {
			state.page = action.payload
		},
	},
})

export const { setPage } = navigationSlice.actions
export const navReducer = navigationSlice.reducer
