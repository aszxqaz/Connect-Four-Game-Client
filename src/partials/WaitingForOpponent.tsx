import styled from "styled-components";
import { BaseDivFC } from "../components/base";
import { Dialog, Heading } from "../components";
import { Spinner } from "../components/Spinner";

export const WaitingForOpponent = () => {
  return (
    <Dialog>
      <Heading size="lg">Waiting for another player...</Heading>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Dialog>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;
