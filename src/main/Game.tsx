import { useState, type Dispatch, type SetStateAction } from 'react'
import Card from '../components/Card'
import InputField from '../components/Input'
import type { CardProps } from '../assets/utils/types'
import { shuffleDeck } from '../components/Shuffle'
import GameOver from '../components/Over'
import { jpDeck } from '../assets/utils/japanese'
import Answer from '../components/Answer'


type GameProps = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
}

export default function Game({deck, setDeck} : GameProps) {
    const [ score, setScore ] = useState<number>(0);
    const [ isFlipped, setIsFlipped ] = useState<boolean>(false);
    const [ angle, setAngle ] = useState<number>(0);
    const [ value, setValue ] = useState<string>('');

    const handleReset = () => {
        setScore(0);
        setDeck(() => shuffleDeck(jpDeck));
    }

    if (deck.length === 0) return <GameOver score={score} handleReset={handleReset} />

    return (
        <div id="main">
            <div className='grid grid-cols-3 w-full'>
                <div></div>
            <Card 
                deck={deck} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                angle={angle}
                />
                <Answer 
                    value={value}
                    deck={deck}
                    isFlipped={isFlipped}
                    />
            </div>
            <InputField 
                value={value}
                setValue={setValue}
                deck={deck} 
                setDeck={setDeck}
                score={score}
                setScore={setScore} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                angle={angle}
                setAngle={setAngle}
                />
        </div>
    )
}
