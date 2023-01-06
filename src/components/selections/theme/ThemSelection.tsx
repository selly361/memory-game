import { Container, IconsSelection, NumbersSelection, Text } from "./styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { setTheme } from "features/gameSlice";

function ThemSelection() {
  const theme = useAppSelector((state) => state.game.theme);
  const dispatch = useAppDispatch()

  
  
  return (
    <Container>
      <Text>Select Theme</Text>
      <NumbersSelection
      onClick={() => dispatch(setTheme("numbers"))}
      className={theme === "numbers" ? "active" : ""}>
        Numbers
      </NumbersSelection>
      <IconsSelection 
      onClick={() => dispatch(setTheme("icons"))}
      className={theme === "icons" ? "active" : ""}>
        Icons
      </IconsSelection>
    </Container>
  );
}

export default ThemSelection;
