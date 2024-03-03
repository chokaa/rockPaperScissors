import { FC } from 'react'
import styles from './ResultInfoStyles'
import { useAppContext } from '../../state/AppState'

interface ResultInfoProps {
    loading: boolean,
    currentResult: string,
}

const ResultInfo: FC<ResultInfoProps> = ({ loading, currentResult }) => {

    const { possibleMoves, playerMove, computerMove } = useAppContext()
    const shouldShowPlayerMove = playerMove !== 0
    const shouldShowComputerMove = computerMove !== 0
    const shouldShowCurrentResult = !loading && computerMove !== 0

    return (
        <div style={styles.container}>
            {shouldShowPlayerMove && <div style={styles.result}>You played {possibleMoves[playerMove].value}</div>}
            {shouldShowComputerMove && <div style={styles.result}>Sheldon played {possibleMoves[computerMove].value}</div>}
            {loading && <div style={styles.loading}>Loading...</div>}
            {shouldShowCurrentResult && <div style={styles.result}>{currentResult}</div>}
        </div>
    )
}

export default ResultInfo