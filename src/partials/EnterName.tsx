import { Dialog, Heading, MainMenuButton, TextInput } from "../components";

export const EnterName = () => {
  return (
    <Dialog>
      <Heading size="lg">Enter your name:</Heading>
      <TextInput autoFocus name="username" />
      <MainMenuButton variant="primary">Okay, let's play</MainMenuButton>
    </Dialog>
  );
};
