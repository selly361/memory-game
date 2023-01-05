import type { gameSliceState, playerMoves } from "types/gameSlice";

import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "utils/shuffleArray";

const initialState: gameSliceState = {
  theme: "numbers",
  gridSize: "4x4",
  numPlayers: 1,
  currentPlayer: 1,
  playerMoves: {
    1: 0,
  },
  grid: shuffle(Array.from({ length: 16 }, (_, i) => i + 1)),
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
        state.grid = shuffle(Array.from({ length: 36 }, (_, i) => i + 1));
      } else {
        state.grid = shuffle(Array.from({ length: 16 }, (_, i) => i + 1));
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
