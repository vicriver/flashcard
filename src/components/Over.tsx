import { Button } from '@base-ui/react'
import { RedoIcon } from 'lucide-react'
import styles from '../styles/utils.module.css'


type GameOver = {
    score: number
    handleReset: () => void
}

export default function GameOver({score, handleReset} : GameOver ) {
  return (
    <div id="main">
        <div className='text-4xl font-bold'>
            A winner is you! 
        </div>
        <div className='flex gap-2'>
            <div>Score : </div>
            <div>{score}</div>
        </div>
        <Button className={styles.btn} onClick={handleReset} autoFocus>
            <RedoIcon />
            Replay
        </Button>
    </div>
  )
}
