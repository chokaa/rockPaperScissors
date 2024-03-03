import { useState, FC } from 'react'
import { useAppContext } from '../../state/AppState'
import styles from './LayoutStyles'
import useFetchPossibleMoves from '../../services/FetchPossibleMoves'
import ResultTable from '../resultTable/ResultTable'
import PlayerMove from '../playerMove/PlayerMove'
import ResultInfo from '../resultInfo/ResultInfo'

const Layout: FC = () => {
  const { addMoves } = useAppContext()
  const [currentResult, setCurrentResult] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  useFetchPossibleMoves(addMoves)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Can you beat Sheldon in a Rock Paper Scissors Lizard Spock game ?
      </h1>
      <PlayerMove 
        loading={loading}
        setCurrentResult={setCurrentResult}
        setLoading={setLoading}
      />
      <ResultInfo
        loading={loading}
        currentResult={currentResult}
      />
      <ResultTable />
    </div>
  )
}

export default Layout