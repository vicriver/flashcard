import { Button, Field } from "@base-ui/react";
import styles from  '../styles/Input.module.css'
import type { CardProps } from "../assets/utils/types";
import type { Dispatch, SetStateAction } from "react";

type InputField = {
    deck: CardProps[]
    setDeck: Dispatch<SetStateAction<CardProps[]>>
}

export default function InputField({deck, setDeck} : InputField) {
    return (
        <Field.Root className={styles.input}>
            <Field.Label className={'text-center font-extrabold'}>ローマ字</Field.Label>
            <Field.Control />
            <Button>Submit</Button>
        </Field.Root>
    )
}