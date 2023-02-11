import styled from "styled-components";
import { LogoSVG } from "../icons/Logo";
import { VsCPU_SVG } from "../icons/PlayerVsCPU";
import { VsPlayerSVG } from "../icons/VsPlayer";
import { Dialog, MainMenuButton } from "../components";
import { useGlobalStore } from "../zustand/gameplay";

const Logo = styled(LogoSVG)`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const StartMenu = () => {
  const startVsCPU = useGlobalStore((state) => state.startVsCPU);

  
  return (
    <Dialog isCollapsedAtMobile>
      <Logo />
      <MainMenuButton variant="danger" icon={<VsCPU_SVG />} onClick={startVsCPU}>
        Play vs CPU
      </MainMenuButton>
      <MainMenuButton variant="primary" icon={<VsPlayerSVG />}>
        Play vs Player
      </MainMenuButton>
      <MainMenuButton align="start">Game Rules</MainMenuButton>
    </Dialog>
  );
};
