import React, { useEffect, useRef, useState } from "react";

import { StyledTiles } from "./styles";
import { Tile } from "components";
import { useAppSelector } from "app/hooks";

function Tiles() {
  const { grid, gridSize } = useAppSelector((state) => state.game);
  const [clickedTiles, setClickedTiles] = useState<HTMLElement[]>([]);
  const delay = useRef<NodeJS.Timeout>();
  const [disabled, setDisabled] = useState(false);

  const handleTileClick = (e: any) => {
    if (delay.current) {
      return;
    }

    const clickedTile = e.target;
    clickedTile.classList.add("clicked");

    if (!clickedTiles.includes(e.target)) {
      setClickedTiles([...clickedTiles, clickedTile]);
    }

    delay.current = setTimeout(() => {
      delay.current = undefined;
    }, 500);
  };

  useEffect(() => {
    const [firstTile, secondTile] = clickedTiles;

    if (firstTile && secondTile && firstTile !== secondTile) {
      setDisabled(true);

      setTimeout(() => {
        setDisabled(false);
        firstTile.classList.remove("clicked");
        secondTile.classList.remove("clicked");

        setClickedTiles([]);
      }, 1000);

      setTimeout(() => {
        if (firstTile.dataset.card === secondTile.dataset.card) {
          firstTile.classList.add("match");
          secondTile.classList.add("match");
          firstTile.classList.add("disabled");
          secondTile.classList.add("disabled");

          setClickedTiles([]);
        }
      }, 1000);

      // Add the following code to block other tiles from being clicked
      const allTiles = document.querySelectorAll(".tile");
      allTiles.forEach((tile) => tile.setAttribute("disabled", "true"));
    }
  }, [clickedTiles]);

  return (
    <StyledTiles className={`tiles-${gridSize}`}>
      {grid.map((value) => (
        <Tile
          handleTileClick={handleTileClick}
          value={value}
          isDisabled={disabled}
        />
      ))}
    </StyledTiles>
  );
}

export default Tiles;
