import { GameProvider, useGameContext } from '@/app'
import styles from './App.module.css'
import { GameOver, GamePlayBoard, GameSetup } from './index'

function GameContent() {
  const { state } = useGameContext()

  if (state.gamePhase === 'setup') {
    return <GameSetup />
  }

  if (state.gamePhase === 'gameOver') {
    return <GameOver winner={state.winner} players={state.players} />
  }

  return <GamePlayBoard />
}

export function App() {
  return (
    <GameProvider>
      <div className={styles.app}>
        <GameContent />
      </div>
    </GameProvider>
  )
}
