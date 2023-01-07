import { createSlice } from "@reduxjs/toolkit";
import type { gameSliceState } from "types/gameSlice";
import { shuffle } from "utils/shuffleArray";

const initialState: gameSliceState = {
  theme: "numbers",
  gridSize: "4x4",
  numPlayers: 1,
  currentPlayer: 1,
  playerMoves: {
    1: 0,
  },
  grid: shuffle([...Array.from(Array(8).keys()), ...Array.from(Array(8).keys())]),
  stopwatch: 0,
  restart: false
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
      

      if(action.payload === "4x4"){
        state.grid = shuffle([...Array.from(Array(8).keys()).concat(Array.from(Array(8).keys()))])
      } else {
        state.grid = shuffle([...Array.from(Array(18).keys()).concat(Array.from(Array(18).keys()))])
      }

    },
    
    setNumPlayers: (state, action) => {
      state.numPlayers = action.payload;
      state.currentPlayer = 1;
      state.playerMoves = {};

      for (let i = 1; i <= action.payload; i++) {
        state.playerMoves[i] = 0;
      }
    },


    setCurrentPlayer: (state) => {
      state.currentPlayer++

      if(state.currentPlayer > state.numPlayers){
        state.currentPlayer = 1
      }
    },

    setRestart: (state, action) => {
      state.restart = action.payload;

      if(state.restart){
        state.grid = shuffle(state.grid)
        state.currentPlayer = 1;

        for (let i = 1; i <= action.payload; i++) {
          state.playerMoves[i] = 0;
        }
      }
    }
  },
});

export const { setGridSize, setNumPlayers, setTheme, setRestart } = gameSlice.actions;

export default gameSlice.reducer;
