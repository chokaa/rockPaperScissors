import React from 'react';

// Define types for the context value
interface AppContextValue {
  playerMove: number;
  setPlayerMove: React.Dispatch<React.SetStateAction<number>>;
  computerMove: number;
  setComputerMove: React.Dispatch<React.SetStateAction<number>>;
  possibleMoves: PossibleMoves[];
  addMoves: (moves: PossibleMoves[]) => void;
}

interface PossibleMoves {
    id: number;
    value: string;
}

export { AppContextValue, PossibleMoves };
