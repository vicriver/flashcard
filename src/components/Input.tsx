import { Button, Field } from "@base-ui/react";
import styles from  '../styles/Input.module.css'

export default function InputField() {
    return (
        <Field.Root className={styles.input}>
            <Field.Label>Enter your answer</Field.Label>
            <Field.Control />
            <Button>Submit</Button>
        </Field.Root>
    )
}