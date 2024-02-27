import React, { useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../state/AppState';
import styles from './LayoutStyles';
import { PossibleMoves } from '../definitions/Interfaces';
import useFetchPossibleMoves from '../services/FetchPossibleMoves';
import usePlayGame from '../services/PlayGame';

const Layout: React.FC = () => {
  const { possibleMoves, addMoves, playerMove, setPlayerMove, computerMove, setComputerMove } = useAppContext();
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const isButtonDisabled = useMemo(() => !playerMove || loading, [playerMove, loading]);
  useFetchPossibleMoves(addMoves);
  const playGame = usePlayGame(playerMove, setComputerMove, setResult, setLoading);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!loading) {
      setPlayerMove(Number(event.target.selectedIndex));
      setComputerMove(0);
    }
  }, [loading, setPlayerMove, setComputerMove]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Can you beat Sheldon in a Rock Paper Scissors Lizard Spock game ?</h1>
      <select value={possibleMoves[playerMove]?.value} onChange={handleChange} style={styles.select}>
        {possibleMoves.map((move: PossibleMoves) => <option key={uuidv4()} value={move.value}>{move.value}</option>)}
      </select>
      <button onClick={playGame} disabled={isButtonDisabled} style={isButtonDisabled ? styles.buttonDisabled : styles.button}>
        Bazinga
      </button>
      {playerMove !== 0 && <div>You played {possibleMoves[playerMove].value}</div>}
      {Boolean(computerMove) && <div>Sheldon played {possibleMoves[computerMove].value}</div>}
      {loading && <p style={styles.loading}>Loading...</p>}
      {!loading && result && computerMove !== 0 && <p style={styles.result}>{result}</p>}
    </div>
  );
};

export default Layout;