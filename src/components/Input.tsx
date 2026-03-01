import { Button, Field, Form } from "@base-ui/react";
import styles from  '../styles/Input.module.css'
import type { CardProps } from "../assets/utils/types";
import { useState, type Dispatch, type SetStateAction, type SubmitEvent } from "react";

type InputField = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
    score: number
    setScore: Dispatch<SetStateAction<number>>
    isFlipped: boolean
    setIsFlipped: Dispatch<SetStateAction<boolean>>
}

export default function InputField({
    deck, 
    setDeck, 
    score, 
    setScore,
    isFlipped,
    setIsFlipped
} : InputField) {
    const [ value, setValue ] = useState<string>('');

    const handleFlip = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;

        if (value.toLocaleLowerCase().trim() === deck[0].romaji) {
            setValue('');
            setIsFlipped(true);
        }

    }

    const handleNext = () => {
        const newDeck = deck.slice(1);
        setDeck(newDeck);
        setIsFlipped(false);
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;

        const newDeck = deck.slice(1);
        setDeck(newDeck);
        setIsFlipped(true);
        
        if (value.toLowerCase().trim() === deck[0].romaji) {
            const newScore = score + 1;
            setValue('');
            setScore(newScore);
        } else {
            setValue('');
        }

    }

    const submit = isFlipped ? 'Next' : 'Submit';

    return (
        <Form onSubmit={isFlipped ? handleNext : handleFlip}>
            <Field.Root className={styles.input}>
                <Field.Label className={'text-center font-extrabold'}>ローマ字</Field.Label>
                <Field.Control 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus 
                    // disabled={isFlipped}
                    />
                <Button>{submit}</Button>
            </Field.Root>
        </Form>
    )
}