import { io, Socket } from 'socket.io-client'
import { configs } from '../config'

export type PlayerInfo = {
  points?: number;
  username: string;
};

export type GameplayResponse = {
	board: string[]
	hero: PlayerInfo
	opponent: PlayerInfo
	isTurn: boolean
	isFirst: boolean
	last: number
  winner?: {
    userId: string
    indeces: number[]
  }
}

export interface ServerToClient {
	gameCreated: (result: { ok: boolean }) => void
	gameState: (gameState: GameplayResponse) => void
}

export interface ClientToServer {
	createGame: () => void
  action: (num: number) => void
}

export const socket: AppSocket = io(configs.wsBaseUrl, {
	withCredentials: true,
	autoConnect: false,
})

export type AppSocket = Socket<ServerToClient, ClientToServer>
