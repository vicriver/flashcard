import { Button, Field } from "@base-ui/react";
import styles from  '../styles/Input.module.css'

export default function InputField() {
    return (
        <Field.Root className={styles.input}>
            <Field.Label className={'text-center font-extrabold'}>ローマ字</Field.Label>
            <Field.Control />
            <Button>Submit</Button>
        </Field.Root>
    )
}