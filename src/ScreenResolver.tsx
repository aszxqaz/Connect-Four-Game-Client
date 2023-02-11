import { useEffect } from "react";
import { Spinner } from "./components/Spinner";
import { Battle } from "./partials/Battle";
import { EnterName } from "./partials/EnterName";
import { Pending } from "./partials/Pending";
import { StartMenu } from "./partials/StartMenu";
import { useGlobalStore } from "./zustand/gameplay";

export const ScreenResolver = () => {
  const [state, username, me, wasAuth] = useGlobalStore((state) => [
    state.state,
    state.username,
    state.me,
    state.wasAuth
  ]);

  useEffect(() => {
    me();
  }, [me]);

  if (!wasAuth) return <Spinner />;
  if (!username) return <EnterName />

  switch (state) {
    case "LOGIN":
      return <EnterName />;
    case "MAIN_MENU":
      return <StartMenu />;
    case "PLAYING":
      return <Battle />;
    case "PENDING":
      return <Pending />;
    default:
      throw new Error("Something wrong");
  }
};
