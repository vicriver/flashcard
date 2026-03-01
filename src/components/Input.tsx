import { Button, Field, Form } from "@base-ui/react";
import styles from  '../styles/Input.module.css'
import type { CardProps } from "../assets/utils/types";
import { useState, type Dispatch, type SetStateAction } from "react";

type InputField = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
}

export default function InputField({deck, setDeck} : InputField) {
    const [ card, setCard ] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!card.trim()) return;

        if (card.toLowerCase().trim() === deck[0].romaji) {
            const newDeck = deck.slice(1);
            setDeck(newDeck);
            setCard('');
        } else {
            setCard('');
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Field.Root className={styles.input}>
                <Field.Label className={'text-center font-extrabold'}>ローマ字</Field.Label>
                <Field.Control 
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                    autoFocus 
                    />
                <Button>Submit</Button>
            </Field.Root>
        </Form>
    )
}