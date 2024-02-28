import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './DisplayResultStyles';
import { useAppContext } from '../../state/AppState';

const DisplayResult: React.FC = () => {
  const { results, resetAllResults } = useAppContext();
  const resetResults = () => resetAllResults([]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Recent Results</h2>
      <ul style={styles.resultList}>
        {results.map((result) => (
          <li style={styles.resultItem} key={uuidv4()}>{result}</li>
        ))}
      </ul>
      <button style={styles.addButton} onClick={() => resetResults()}>
        Reset results
      </button>
    </div>
  );
};

export default DisplayResult;