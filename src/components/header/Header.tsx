import {
  NewGameButton,
  RestartButton,
  StyledHeader,
  Title,
  Wrapper,
} from "./styles";

import { LogoIcon } from "assets";
import React from "react";
import { setRestart } from "features/gameSlice";
import { useAppDispatch } from "app/hooks";

function Header() {

  const dispatch = useAppDispatch()

  

  return (
    <StyledHeader>
      <LogoIcon />
      <Wrapper>
        <RestartButton onClick={() => dispatch(setRestart(true))}>Restart</RestartButton>
        <NewGameButton>New Game</NewGameButton>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
