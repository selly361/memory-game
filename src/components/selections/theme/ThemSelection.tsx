import { Container, IconsSelection, NumbersSelection, Text } from "./styles";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { changeTheme } from "features/gameSlice";

function ThemSelection() {
  const theme = useAppSelector((state) => state.game.theme);
  const dispatch = useAppDispatch()

  
  
  return (
    <Container>
      <Text>Select Theme</Text>
      <NumbersSelection
      onClick={() => dispatch(changeTheme("numbers"))}
      className={theme === "numbers" ? "active" : ""}>
        Numbers
      </NumbersSelection>
      <IconsSelection 
      onClick={() => dispatch(changeTheme("icons"))}
      className={theme === "icons" ? "active" : ""}>
        Icons
      </IconsSelection>
    </Container>
  );
}

export default ThemSelection;
