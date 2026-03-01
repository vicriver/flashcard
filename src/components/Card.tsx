import type { CardProps } from '../assets/utils/types'
import { motion } from 'motion/react'
import styles from  '../styles/Card.module.css'
import { type Dispatch, type SetStateAction } from 'react'

type Card ={
    deck: CardProps[]
    isFlipped: boolean
    setIsFlipped: Dispatch<SetStateAction<boolean>>
    angle: number
}

export default function Card({ deck, isFlipped, setIsFlipped, angle } : Card) {
    const cardAnimation = {
        visible: { opacity: 1 },
        hidden: { opacitiy: 0, y: -100 },
    }

    return (
        <div>
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0}}
                >
                <motion.div 
                    key={deck[0].character}
                    variants={cardAnimation}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 100, y: [0, -50, 0], rotate: angle, transition: { duration: .5 } }}
                    // exit='hidden'
                    whileHover={{ rotate: 5 }}
                    whileTap={{ rotate: -5 }}
                    transition={{ ease: "easeInOut", duration: .25 }}
                    >
                        <Content deck={deck} isFlipped={isFlipped} />
                    {/* <div className={`${styles.card} ${styles.hanafuda}`}>
                        <div>
                            {deck[0].character}
                        </div>
                    </div> */}
                </motion.div>
            </motion.div>
        </div>
    )
}


const Content = ({deck, isFlipped} : {deck: CardProps[]; isFlipped: boolean}) => {
    if (isFlipped) return   (
        <div className={`${styles.card} ${styles.card_back} ${styles.hanafuda}`}>
            <div>
                {deck[0].romaji}
            </div>
        </div>
    )
    return (
        <div className={`${styles.card} ${styles.hanafuda}`}>
            <div>
                {deck[0].character}
            </div>
        </div>
    )
}