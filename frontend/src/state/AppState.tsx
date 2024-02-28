import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppContextValue, PossibleMoves } from '../definitions/Interfaces';
// Create a context
const AppContext = createContext<AppContextValue | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playerMove, setPlayerMove] = useState<number>(0);
  const [computerMove, setComputerMove] = useState<number>(0);
  const [possibleMoves, setPossibleMoves] = useState<PossibleMoves[]>([
    { id: 0, value: 'Select your move' }
  ]);
  const [results, setResults] = useState<string[]>([]);
  const addMoves = (moves: PossibleMoves[]) => setPossibleMoves([...possibleMoves, ...moves]);
  const addResult = (result: string) => setResults([result, ...results.slice(0, 9)]);
  const resetAllResults = () => {
    setResults([]);
    setComputerMove(0);
  }

  return (
    <AppContext.Provider
      value={{
        playerMove,
        setPlayerMove,
        computerMove,
        setComputerMove,
        possibleMoves,
        addMoves,
        results,
        addResult,
        resetAllResults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};