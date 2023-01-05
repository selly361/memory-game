import { Button4x4, Button6x6, Container, Text } from "./styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { changeGridSize } from "features/gameSlice";

function GrideSizeSelection() {
  const gridSize = useAppSelector((state) => state.game.gridSize);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Text>Grid Size</Text>
      <Button4x4 
      onClick={() => dispatch(changeGridSize("4x4"))}
      className={gridSize === "4x4" ? "active" : ""}>4x4</Button4x4>
      <Button6x6 
      onClick={() => dispatch(changeGridSize("6x6"))}
      className={gridSize === "6x6" ? "active" : ""}>6x6</Button6x6>
    </Container>
  );
}

export default GrideSizeSelection;
