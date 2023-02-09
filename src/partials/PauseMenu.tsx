import { Dialog, Heading, MainMenuButton } from "../components";

export const PauseMenu = () => {
  return (
    <Dialog>
      <Heading>Pause</Heading>
      <MainMenuButton>Continue Game</MainMenuButton>
      <MainMenuButton>Restart</MainMenuButton>
      <MainMenuButton variant="danger">Quit Game</MainMenuButton>
    </Dialog>
  );
};
