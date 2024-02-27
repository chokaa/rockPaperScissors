import React, { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [playerMove, setPlayerMove] = useState(0);
  const [computerMove, setComputerMove] = useState(0);
  const [possibleMoves, setPossibleMoves] = useState([{ id: 0, value: '', text: 'Select your move' }]);
  const addMoves = (moves) => setPossibleMoves([...possibleMoves, ...moves]);

  return (
    <AppContext.Provider 
      value={{ 
        playerMove,
        setPlayerMove,
        computerMove,
        setComputerMove,
        possibleMoves,
        addMoves
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);