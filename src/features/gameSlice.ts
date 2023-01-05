import type { gameSliceState, playerMoves } from "types/gameSlice";

import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "utils/shuffleArray";

const grid4x4 = [
  ...Array.from({ length: 8 }, (_, i) => i + 1),
  ...Array.from({ length: 8 }, (_, i) => i + 1),
];

const grid6x6 = [
  ...Array.from({ length: 18 }, (_, i) => i + 1),
  ...Array.from({ length: 18 }, (_, i) => i + 1),
];

const initialState: gameSliceState = {
  theme: "numbers",
  gridSize: "4x4",
  numPlayers: 1,
  currentPlayer: 1,
  playerMoves: {
    1: 0,
  },
  grid: shuffle(grid4x4)
};

const gameSlice = createSlice({
  name: "game",

  initialState,

  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },

    changePlayers: (state, action) => {
      state.numPlayers = action.payload;

      const arr = Array.from({ length: action.payload }, (_, i) => i + 1);

      const playerMoves: playerMoves = arr.reduce(
        (accum: playerMoves, current: number) => {
          accum[current] = 0;
          return accum;
        },
        {}
      );

      state.playerMoves = playerMoves;
    },

    changeGridSize: (state, action) => {
      state.gridSize = action.payload;

      if (state.gridSize === "6x6") {
        state.grid = shuffle(grid6x6)

      } else if (state.gridSize === "4x4") {
        state.grid = shuffle(grid4x4)
      }
    },

    changeCurrentPlayer: (state) => {
      state.currentPlayer++;

      if (state.currentPlayer > state.numPlayers) {
        state.currentPlayer = 1;
      }
    },

    changePlayerMoves: (state) => {
      state.playerMoves[state.currentPlayer]++;
    },
  },
});

export default gameSlice.reducer;
export const {
  changeCurrentPlayer,
  changePlayerMoves,
  changeGridSize,
  changeTheme,
  changePlayers,
} = gameSlice.actions;
