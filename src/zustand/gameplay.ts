import { create } from "zustand";

export const useGameplayStore = create((set) => ({
  cursor: 0,
  isTurn: true,
  board: new Array<Array<boolean | null>>(6)
    .fill([null])
    .map((_) => new Array<boolean | null>(7).fill(null)),
}));
