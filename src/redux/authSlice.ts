import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type AuthState = {
	username: string | null
  error: string | null
  isPerformed: boolean
}

const initialState: AuthState = {
	username: null,
  error: null,
  isPerformed: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<string>) => {
			state.username = action.payload
      state.error = null
      state.isPerformed = true
		},
    setError: (state, action: PayloadAction<string>) => {
      state.username = null
      state.error = action.payload
      state.isPerformed = true
    }
	},
})

export const { setUser, setError } = authSlice.actions
export const authReducer = authSlice.reducer