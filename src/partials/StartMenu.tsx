import styled from "styled-components";
import { LogoSVG } from "../icons/Logo";
import { VsCPU_SVG } from "../icons/PlayerVsCPU";
import { VsPlayerSVG } from "../icons/VsPlayer";
import { Dialog, MainMenuButton } from "../components";
import { useGlobalStore } from "../zustand/gameplay";
import { useEffect, useState } from "react";
import { socket } from "../socketio";

const Logo = styled(LogoSVG)`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const StartMenu = () => {
  const [startVsCPU, startVsPlayer] = useGlobalStore((state) => [
    state.startVsCPU,
    state.startVsPlayer,
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <Dialog isCollapsedAtMobile>
      <Logo />
      <MainMenuButton
        variant="danger"
        icon={<VsCPU_SVG />}
        onClick={startVsCPU}
      >
        Play vs CPU
      </MainMenuButton>
      <MainMenuButton
      disabled={isSubmitting}
        variant="primary"
        icon={<VsPlayerSVG />}
        onClick={() => {
            setIsSubmitting(true)
            startVsPlayer(socket, () => {
                setIsSubmitting(false)
            })
        }}
      >
        Play vs Player
      </MainMenuButton>
      <MainMenuButton align="start">Game Rules</MainMenuButton>
    </Dialog>
  );
};
