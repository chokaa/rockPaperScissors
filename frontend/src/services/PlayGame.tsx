import { useCallback } from 'react';
import axios from 'axios';

const usePlayGame = (
  playerMove: number, 
  setComputerMove: (move: number) => void, 
  setResult: (result: string) => void, 
  setLoading: (loading: boolean) => void
) => {
  const playGame = useCallback(async () => {
    try {
      setLoading(true);
      setComputerMove(0);
      const response = await axios.post('http://localhost:5000/play', { player: playerMove });
      const { result, computer } = response.data;
      setComputerMove(computer);
      setResult(result);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [playerMove]);

  return playGame;
};

export default usePlayGame;