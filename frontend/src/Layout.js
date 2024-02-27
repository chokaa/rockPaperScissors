import React, { useState, useCallback, useMemo, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from './AppState';
import styles from './LayoutStyles';

const Layout = () => {
  const { possibleMoves, addMoves, playerMove, setPlayerMove, computerMove, setComputerMove } = useAppContext();
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/choices');
        const mappedMoves = [];
        for(const [key,value] of Object.entries(response.data)) {
            mappedMoves.push({id: key, value: value, text: value})
        }
        addMoves(mappedMoves);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const playGame = useCallback(async () => {
    try {
      setLoading(true);
      setComputerMove(0);
      const response = await axios.post('http://localhost:5000/play', { player: playerMove });
      const { result, player, computer } = response.data;
      setComputerMove(computer)
      setResult(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [playerMove]);

  const handleChange = (event) => {
    if (!loading) {
      setPlayerMove(event.target.selectedIndex);
      setComputerMove(0);
    }
  };

  const isButtonDisabled = useMemo(() => !playerMove || loading, [playerMove, loading]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Can you beat Sheldon in a Rock Paper Scissors Lizard Spock game ?</h1>
      <select value={possibleMoves[playerMove].value} onChange={handleChange} style={styles.select}>
        {possibleMoves.map(move => <option key={uuidv4()} value={move.value}>{move.text}</option>)}
      </select>
      <button onClick={playGame} disabled={isButtonDisabled} style={isButtonDisabled ? styles.buttonDisabled : styles.button}>
        Bazinga
      </button>
      {playerMove !== 0 && <div>You played {possibleMoves[playerMove].text}</div>}
      {Boolean(computerMove) && <div>Sheldon played {possibleMoves[computerMove].text}</div>}
      {loading && <p style={styles.loading}>Loading...</p>}
      {!loading && result && computerMove !==0 && <p style={styles.result}>{result}</p>}
    </div>
  );
};

export default Layout;