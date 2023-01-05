import type { gameSliceState, playerMoves } from "types/gameSlice";

import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "utils/shuffleArray";

const initialState: gameSliceState = {
  theme: "numbers",
  gridSize: "4x4",
  numPlayers: 1,
  currentPlayer: 1,
  playerMoves: {
    1: 0
  },
  grid: shuffle(Array.from({ length: 16 }, (_, i) => i + 1))
};

const gameSlice = createSlice({
  name: "game",

  initialState,

  reducers: {


    changeTheme: (state, action) => {
      state.theme = action.payload;
    },

    changeSettings: (state, action) => {
      const { numPlayers, gridSize, theme } = action.payload;

      state.numPlayers = numPlayers;
      state.gridSize = gridSize;

      

      if(state.gridSize === "6x6"){
        state.grid = shuffle(Array.from({ length: 36 }, (_, i) => i + 1))
      } else {
        state.grid = shuffle(Array.from({ length: 16 }, (_, i) => i + 1))

      }
      
      const arr = Array.from({ length: numPlayers }, (_, i) => i + 1);
      

      const playerMoves: playerMoves = arr.
      reduce((accum: playerMoves, current: number) => {
        accum[current] = 0
        return accum
      }, {});

      state.playerMoves = playerMoves
      
    },
    
    changeCurrentPlayer: (state) => {
        state.currentPlayer++

        if(state.currentPlayer > state.numPlayers){
            state.currentPlayer = 1
        }
    },

    changePlayerMoves: (state) => {
        state.playerMoves[state.currentPlayer]++
    },

    
    
  },
});

export default gameSlice.reducer;
export const { changeCurrentPlayer, changePlayerMoves, changeSettings, changeTheme } = gameSlice.actions