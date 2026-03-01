import { useState, type Dispatch, type SetStateAction } from 'react'
import Card from '../components/Card'
import InputField from '../components/Input'
import type { CardProps } from '../assets/utils/types'
import { shuffleDeck } from '../components/Shuffle'
import { hiragana } from '../assets/utils/hiragana'
import GameOver from '../components/Over'


type GameProps = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
}

export default function Game({deck, setDeck} : GameProps) {
    const [ score, setScore ] = useState<number>(0);
    const [ isFlipped, setIsFlipped ] = useState<boolean>(false);

    const handleReset = () => {
        setScore(0);
        setDeck(() => shuffleDeck(hiragana));
    }

    if (deck.length === 0) return <GameOver score={score} handleReset={handleReset} />

    return (
        <div id="main">
            <Card 
                deck={deck} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                />
            <InputField 
                deck={deck} 
                setDeck={setDeck}
                score={score}
                setScore={setScore} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
                />
        </div>
    )
}
