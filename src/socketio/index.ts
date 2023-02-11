import { io, Socket } from "socket.io-client";
import { configs } from "../config";

export interface ServerToClient {
  gameCreated: (result: { ok: boolean }) => void;
}

export interface ClientToServer {
  createGame: () => void;
}

export const socket: AppSocket = io(configs.wsBaseUrl, {
  withCredentials: true,
  autoConnect: false,
});

export type AppSocket = Socket<ServerToClient, ClientToServer>;
