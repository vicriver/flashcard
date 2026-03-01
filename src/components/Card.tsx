import type { CardProps } from '../assets/utils/types'
import styles from  '../styles/Card.module.css'

type Card ={
    deck: CardProps[]
}

export default function Card({ deck } : Card) {
    return (
        <div>
            <div className={`${styles.card} ${styles.hanafuda}`}>
                <div>
                    {deck[0].character}
                </div>
            </div>
        </div>
    )
}