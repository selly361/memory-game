import { Header, Tiles } from "components"

import { Body } from "./styles";
import React from "react";
import { useAppSelector } from "app/hooks";

function Game() {
  return <Body>
    <Header />
    <Tiles />
  </Body>
}

export default Game;
