import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';

const buttonStyle = {
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    ...buttonStyle,
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
  buttonDisabled: {
    ...buttonStyle,
    backgroundColor: '#000000',
    cursor: 'not-allowed',
  },
  loading: {
    color: '#999',
    fontSize: '16px',
    marginTop: '20px',
  },
  result: {
    color: '#28a745',
    fontSize: '24px',
    marginTop: '20px',
  },
};

const App = () => {
  const [playerMove, setPlayerMove] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const playGame = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/play', { move: playerMove });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [playerMove]);

  const handleChange = (e) => {
    if (!loading) {
      setPlayerMove(e.target.value);
    }
  };

  const isButtonDisabled = useMemo(() => !playerMove || loading, [playerMove, loading]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Can you beat Sheldon in a Rock Paper Scissors Lizard Spock game ?</h1>
      <select value={playerMove} onChange={handleChange} style={styles.select}>
        <option value="">Select your move</option>
        <option value="Rock">Rock</option>
        <option value="Paper">Paper</option>
        <option value="Scissors">Scissors</option>
        <option value="Lizard">Lizard</option>
        <option value="Spock">Spock</option>
      </select>
      <button onClick={playGame} disabled={isButtonDisabled} style={isButtonDisabled ? styles.buttonDisabled : styles.button}>
        Bazinga
      </button>
      {loading && <p style={styles.loading}>Loading...</p>}
      {!loading && result && <p style={styles.result}>{result}</p>}
    </div>
  );
};

export default App;