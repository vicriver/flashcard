import { type Dispatch, type SetStateAction } from 'react'
import Card from '../components/Card'
import InputField from '../components/Input'
import type { CardProps } from '../assets/utils/types'
import { Button } from '@base-ui/react'
import { shuffleDeck } from '../components/Shuffle'
import { hiragana } from '../assets/utils/hiragana'

type GameProps = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
}

export default function Game({deck, setDeck} : GameProps) {

    const handleReset = () => {
        setDeck(() => shuffleDeck(hiragana))
    }

    if (deck.length === 0) return (
        <div id="main">
            <div className='text-xl font-bold'>
                A winner is you! 
            </div>
            <Button onClick={handleReset}>Restart</Button>
        </div>
    )

    return (
        <div id="main">
            <Card deck={deck} />
            <InputField deck={deck} setDeck={setDeck} />
        </div>
    )
}
