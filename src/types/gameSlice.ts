
type theme = "numbers" | "icons";
type gridSize = "4x4" | "6x6";

export type playerMoves = { [key: number]: number }

export type gameSliceState = {
    theme: theme;
    gridSize: gridSize;
    numPlayers: number;
    currentPlayer: number;
    playerMoves: playerMoves
    grid: number[];
    stopwatch: number;
    restart: boolean;
}
