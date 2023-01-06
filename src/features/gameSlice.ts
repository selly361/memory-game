import { createSlice } from "@reduxjs/toolkit";
import type { gameSliceState } from "types/gameSlice";
import { shuffle } from "utils/shuffleArray";

const grid4x4 = [
  ...Array.from({ length: 8 }, (_, i) => i),
  ...Array.from({ length: 8 }, (_, i) => i),
];

const grid6x6 = [
  ...Array.from({ length: 18 }, (_, i) => i),
  ...Array.from({ length: 18 }, (_, i) => i),
];

const initialState: gameSliceState = {
  theme: "numbers",
  gridSize: "4x4",
  numPlayers: 1,
  currentPlayer: 1,
  playerMoves: {
    1: 0,
  },
  grid: shuffle(grid4x4),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setGridSize: (state, action) => {
      state.gridSize = action.payload;
      state.grid = shuffle(
        action.payload === "4x4" ? grid4x4 : grid6x6
      );
    },
    setNumPlayers: (state, action) => {
      state.numPlayers = action.payload;
      state.currentPlayer = 1;
      state.playerMoves = {};

      for (let i = 1; i <= action.payload; i++) {
        state.playerMoves[i] = 0;
      }
    }
  },
});

export const { setGridSize, setNumPlayers, setTheme } = gameSlice.actions

export default gameSlice.reducer
