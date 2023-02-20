import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { authReducer } from './authSlice'
import { navReducer } from './navigationSlice'
import { battleReducer } from './battleSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
    nav: navReducer,
    battle: battleReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch