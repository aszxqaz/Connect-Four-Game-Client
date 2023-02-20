import { ReactNode } from 'react'
import { Spinner } from './components/Spinner'
import { Battle } from './partials/Battle'
import { GameRules } from './partials/GameRules'
import { Login } from './partials/Login'
import { StartMenu } from './partials/StartMenu'
import { Page } from './redux/navigationSlice'
import { WaitingForOpponent } from './partials/WaitingForOpponent'

export const screenMap: {
	[K in Page]: JSX.Element
} = {
	BATTLE: <Battle />,
	GAME_RULES: <GameRules />,
	LOADING: <Spinner />,
	LOGIN: <Login />,
	START_MENU: <StartMenu />,
	WAITING_FOR_OPPONENT: <WaitingForOpponent />
}
