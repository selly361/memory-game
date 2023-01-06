import React, { SyntheticEvent, useEffect, useRef } from "react";
import { icons, numbers } from "data/theme";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledTile } from "./styles";

interface PropTypes {
  value: number;
  handleTileClick: (e: any) => void;
  isDisabled: boolean;
}

function Tile({ value, handleTileClick, isDisabled }: PropTypes) {
  const { gridSize, theme } = useAppSelector((state) => state.game);

  return (
    <StyledTile
      onClick={handleTileClick}
      data-card={`card-${value}`}
      className={`tile-${gridSize}`}
      disabled={isDisabled}
    >
      {theme === "numbers" ? (
        numbers[value]
      ) : (
        <FontAwesomeIcon icon={icons[value]} />
      )}
    </StyledTile>
  );
}

export default Tile;
