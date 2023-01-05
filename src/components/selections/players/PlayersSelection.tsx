import { Container, Selection, Text } from "./styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { changePlayers } from "features/gameSlice";

function PlayersSelection() {
  const numPlayers = useAppSelector((state) => state.game.numPlayers);
  const dispatch = useAppDispatch()
  return (
    <Container>
      <Text>Numbers of Players</Text>
      {[1, 2, 3, 4].map((num) => (
        <Selection 
        onClick={() => dispatch(changePlayers(num))}
        className={numPlayers === num ? "active" : ""}>
          {num}
        </Selection>
      ))}
    </Container>
  );
}

export default PlayersSelection;
