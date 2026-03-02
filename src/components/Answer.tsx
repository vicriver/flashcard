import { CircleIcon, XIcon } from 'lucide-react'
import type { CardProps } from '../assets/utils/types'
import { motion, AnimatePresence, easeOut } from 'motion/react'
import { useEffect } from 'react'

type AnswerProps = {
    value: string
    deck: CardProps[]
    isFlipped: boolean
}

export default function Answer({value, deck, isFlipped} : AnswerProps) {

    const playSound = (src: string) => new Audio(src).play();

    useEffect(() => {
        if (!isFlipped) return;
        if (value === deck[0].roman) playSound('correct.mp3');
        else playSound('wrong.mp3');
    }, [isFlipped])

    if((value !== deck[0].roman)) return (
        <AnimatePresence>
            {isFlipped && <motion.div 
                animate={{y: [0, -100, -50], scale: 2, transition: { duration: .25 }}}
                transition={{ease: 'easeOut', duration: .25}}
                exit={{y: [0, -100, -50], scale: 0, transition: { duration: .25}}}
                className='flex justify-center items-center'>
            <XIcon size={128} color='red' className='' />
            </motion.div>}
        </AnimatePresence>
  )

  if ((value === deck[0].roman)) return (
    <AnimatePresence>
        {isFlipped && <motion.div 
            animate={{opacity: [1, 0, 1, 0, 1]}}
            transition={{ duration: 0.3, times: [0, 0.5, 0.5, 0.75, 1] }}
            // exit={{y: [0, -100, -50], scale: 0, transition: { duration: .25}}}
            className='flex justify-center items-center'>
            <CircleIcon size={256} color='green' className='' />
        </motion.div>}
    </AnimatePresence>
  )


  return;
}
