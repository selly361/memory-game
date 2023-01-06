import styled from "styled-components";

export const StyledTiles = styled.ul`
    display: grid;
    margin: auto;
    margin-top: 100px;
    
    &.tiles-4x4 {
    width: 532px;
    height: 532px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
  }

  &.tiles-6x6 {
    width: 572px;
    height: 572px;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;
  }
`;
