import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectorNav = () => useAppSelector((state) => state.nav)
export const useSelectorAuth = () => useAppSelector((state) => state.auth)
export const useSelectorBattle = () => useAppSelector((state) => state.battle)
export const useSelectorBoardCell = (index: number) =>
	useAppSelector((state) => state.battle.board[index])
