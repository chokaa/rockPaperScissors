import { Fragment, useMemo, FC, useCallback, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './PlayerMoveStyles'
import { useAppContext } from '../../state/AppState'
import { PossibleMoves } from '../../definitions/Interfaces'
import playGameCall from '../../services/PlayGame'

interface PlayerMoveProps {
    loading: boolean,
    setCurrentResult: (result: string) => void,
    setLoading: (isLoading: boolean) => void
}

const PlayerMove: FC<PlayerMoveProps> = ({ loading, setCurrentResult, setLoading }) => {

    const { possibleMoves, playerMove,  setPlayerMove, setComputerMove, addResult } = useAppContext()
    const isButtonDisabled: boolean = useMemo(() => playerMove === 0 || loading, [playerMove, loading])

    const playGame = playGameCall(playerMove, setComputerMove, setCurrentResult, setLoading, addResult)
    const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
      if (!loading) {
        setPlayerMove(Number(event.target.selectedIndex))
        setComputerMove(0)
      }
    }, [loading, setPlayerMove, setComputerMove])

    return (
        <Fragment>
            <select value={possibleMoves[playerMove]?.value} onChange={handleChange} style={styles.select}>
                {possibleMoves.map((move: PossibleMoves) => <option key={uuidv4()} value={move.value}>{move.value}</option>)}
            </select>
            <button onClick={playGame} disabled={isButtonDisabled} style={isButtonDisabled ? styles.buttonDisabled : styles.button}>
                Bazinga
            </button>
        </Fragment>
    )
}

export default PlayerMove