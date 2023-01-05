import {
  NewGameButton,
  RestartButton,
  StyledHeader,
  Title,
  Wrapper,
} from "./styles";

import { LogoIcon } from "assets";
import React from "react";

function Header() {
  return (
    <StyledHeader>
      <LogoIcon />
      <Wrapper>
        <RestartButton>Restart</RestartButton>
        <NewGameButton>New Game</NewGameButton>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
