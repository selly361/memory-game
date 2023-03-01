import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { StyledTiles } from "./styles";
import { Tile } from "components";
import { setRestart } from "features/gameSlice";

function Tiles() {
  const { grid, gridSize, restart } = useAppSelector((state) => state.game);
  const [clickedTiles, setClickedTiles] = useState<HTMLElement[]>([]);
  const delay = useRef<NodeJS.Timeout>();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch()
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
  
      const timeout1 = setTimeout(() => {
        setDisabled(false);
        firstTile.classList.remove("clicked");
        secondTile.classList.remove("clicked");
  
        setClickedTiles([]);
      }, 1000);
  
      const timeout2 = setTimeout(() => {
        if (firstTile.dataset.card === secondTile.dataset.card) {
          firstTile.classList.add("match");
          secondTile.classList.add("match");
          firstTile.classList.add("disabled");
          secondTile.classList.add("disabled");
  
          setClickedTiles([]);
        }


        
      }, 1000);
  
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [clickedTiles]);
  


  useEffect(() => {
    if(restart){
      clickedTiles.forEach(tile => {
        tile.classList.remove("match")
        tile.classList.remove("disabled")
        tile.classList.remove("clicked")

        

        
        dispatch(setRestart(false))
      })
    }
  })

  return (
    <StyledTiles className={`tiles-${gridSize}`}>
      {grid.map((value, i) => (
        <Tile
          key={`${value}-${i}`} 
          handleTileClick={handleTileClick}
          value={value}
          isDisabled={disabled}
        />
      ))}
    </StyledTiles>
  );
}

export default Tiles;
