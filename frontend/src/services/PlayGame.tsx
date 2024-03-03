import axios from 'axios'

const playGameCall = (
  playerMove: number, 
  setComputerMove: (move: number) => void, 
  setCurrentResult: (result: string) => void, 
  setLoading: (loading: boolean) => void,
  addResult: (result: string) => void
) => {
  const playGame = async () => {
    try {
      setLoading(true)
      setComputerMove(0)
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/play`, { player: playerMove })
      const { result, computer } = response.data
      setComputerMove(computer)
      setCurrentResult(result)
      addResult(result)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return playGame
}

export default playGameCall