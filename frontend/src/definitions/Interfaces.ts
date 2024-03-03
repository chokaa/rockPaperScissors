import React from 'react'

// Define types for the context value
interface AppContextValue {
  playerMove: number
  setPlayerMove: React.Dispatch<React.SetStateAction<number>>
  computerMove: number
  setComputerMove: React.Dispatch<React.SetStateAction<number>>
  possibleMoves: PossibleMoves[]
  addMoves: (moves: PossibleMoves[]) => void
  results: string[],
  addResult: (result: string) => void
  resetAllResults: React.Dispatch<React.SetStateAction<string[]>>
}

interface PossibleMoves {
    id: number
    value: string
}

export { AppContextValue, PossibleMoves }
