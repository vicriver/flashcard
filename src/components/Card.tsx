import type { CardProps } from '../assets/utils/types'
import { motion } from 'motion/react'
import styles from  '../styles/Card.module.css'

type Card ={
    deck: CardProps[]
}

export default function Card({ deck } : Card) {
    const cardAnimation = {
        visible: { opacity: 1 },
        hidden: { opacitiy: 0, y: -100 },
    }

    return (
        <div>
            <motion.div 
                variants={cardAnimation}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 100, y: [0, -50, 0], transition: { duration: .5 } }}
                exit='hidden'
                whileHover={{ rotate: 5 }}
                whileTap={{ rotate: -5 }}
                transition={{ ease: "easeInOut", duration: .25 }}
                >
                <div className={`${styles.card} ${styles.hanafuda}`}>
                    <div>
                        {deck[0].character}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}