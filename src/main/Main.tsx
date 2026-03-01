import { useEffect, useState } from "react";
import Card from "../components/Card";
import InputField from "../components/Input";
import Top from "../nav/Top";
import { hiragana } from "../assets/utils/hiragana";
import type { CardProps } from "../assets/utils/types";
import { shuffleDeck } from "../components/Shuffle";

export default function Main() {
    const [ deck, setDeck ] = useState<CardProps[]>(() => shuffleDeck(hiragana));

    return (
        <div>
            <Top />
            <div id="main">
                <Card deck={deck} />
                <InputField deck={deck} setDeck={setDeck} />
            </div>
            <div id="bottom">
                version 0.1
            </div>
        </div>
    )
}