import { LanguagesIcon } from "lucide-react";
import { iconSize, languages } from "../assets/utils/constants";
import type { LanguageProps } from "../assets/utils/types";
import { Select } from "@base-ui/react";

export default function Languages() {
    return (
        <Select.Root>
            <Select.Trigger className="flex items-center gap-2 border border-black p-2 rounded bg-[var(--main-white)] hover:opacity-60">
                <Select.Value />
                <LanguagesIcon size={iconSize} />
                {languages.find((language : LanguageProps) => language.endpoint === 'jp' )?.native}
                <Select.Icon />
            </Select.Trigger>
            <Select.Portal>
                <Select.Positioner>
                    <Select.Popup>
                        {languages.map((language : LanguageProps) => {
                            return (
                                <Select.Item value={language.endpoint} key={language.id}>
                                    {language.native}
                                </Select.Item>
                            )
                        })}
                    </Select.Popup>
                </Select.Positioner>
            </Select.Portal>
        </Select.Root>
    )
}