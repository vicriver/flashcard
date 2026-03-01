import { ChevronDownIcon } from "lucide-react";
import { languages } from "../assets/utils/constants";
import type { LanguageProps } from "../assets/utils/types";
import { Select } from "@base-ui/react";
import styles from '../styles/Top.module.css'
import { useState } from "react";

export default function Languages() {

    const [ language, setLanguage ] = useState<LanguageProps | null>(languages[1])
    return (
            <Select.Root value={language} onValueChange={setLanguage} disabled>
                <Select.Trigger className={styles.languages}>
                    <Select.Value placeholder="Select language" />
                    <Select.Icon><ChevronDownIcon /></Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner>
                        <Select.Popup className={styles.lg_menu}>
                            <Select.List>
                            {languages.map((lg : LanguageProps) => {
                                return (
                                    <Select.Item value={lg.native} key={lg.id} className={styles.lg_item}>
                                        {lg.native}
                                    </Select.Item>
                                )
                            })}
                            </Select.List>
                        </Select.Popup>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
    )
}