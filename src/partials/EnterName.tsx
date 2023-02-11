import { useState } from "react";
import { Dialog, Heading, MainMenuButton, TextInput } from "../components";
import { useGlobalStore } from "../zustand/gameplay";
import { ErrorMessage } from "../components/ErrorMessage";

export const EnterName = () => {
  const [login] = useGlobalStore((state) => [state.login]);
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  return (
    <Dialog>
      <Heading size="lg">Enter your name:</Heading>
      <div>
        <TextInput
          autoFocus
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ErrorMessage>{error}</ErrorMessage>
      </div>
      <MainMenuButton
        disabled={isSubmitting}
        variant="primary"
        onClick={() => {
          if (username.length < 2) {
            setError("Too short bro");
            return;
          }
          login(username).then((data) => {
            setIsSubmitting(false);
          });
          setIsSubmitting(true);
        }}
      >
        Okay, let's play
      </MainMenuButton>
    </Dialog>
  );
};
