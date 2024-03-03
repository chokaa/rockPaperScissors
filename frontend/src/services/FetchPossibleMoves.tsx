import { useEffect } from 'react'
import axios from 'axios'
import { PossibleMoves } from '../definitions/Interfaces'

const useFetchPossibleMoves = (addMoves: (moves: PossibleMoves[]) => void) => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/choices`)
          const mappedMoves: PossibleMoves[] = Object.entries(response.data).map(([key, value]: any) => ({
            id: Number(key),
            value: value,
          }))
          addMoves(mappedMoves)
        } catch (error) {
          console.error(error)
        }
      }
  
      fetchData()
    }, [])
}

export default useFetchPossibleMoves