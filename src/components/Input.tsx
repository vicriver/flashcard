import { Button, Field, Form } from "@base-ui/react";
import styles from  '../styles/Input.module.css'
import type { CardProps } from "../assets/utils/types";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction, type SubmitEvent } from "react";

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

    const controlRef = useRef<HTMLInputElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!isFlipped) {
            controlRef.current?.focus()
        }
    }, [isFlipped])


    const handleFlip = () => {

        if (!value.trim()) return;

        if (value.toLocaleLowerCase().trim() === deck[0].romaji) {
            setScore(score + 1);
        }
        setIsFlipped(true);
        btnRef.current?.focus()

    }

    const handleNext = () => {
        setValue('');
        const newDeck = deck.slice(1);
        setDeck(newDeck);
        setIsFlipped(false);
        controlRef.current?.focus();
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) return;

        if (isFlipped) {
            handleNext();
        } else {
            handleFlip();
        }
    }

    const submit = isFlipped ? 'Next' : 'Submit';

    return (
        <Form onSubmit={handleSubmit}>
            <Field.Root className={styles.input}>
                <Field.Label className={'text-center font-extrabold'}>ローマ字</Field.Label>
                <Field.Control 
                    ref={controlRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus 
                    disabled={isFlipped}
                    className={'disabled:opacity-20'}
                    />
                <Button ref={btnRef} type="submit">{submit}</Button>
            </Field.Root>
        </Form>
    )
}