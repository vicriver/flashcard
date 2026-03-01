import { useState } from "react";
import Top from "../nav/Top";
import { jpDeck } from "../assets/utils/japanese";
import type { CardProps } from "../assets/utils/types";
import { shuffleDeck } from "../components/Shuffle";
import Game from "./Game";

export default function Main() {
    const [ deck, setDeck ] = useState<CardProps[]>(() => shuffleDeck(jpDeck));

    return (
        <div>
            <Top />
            <Game deck={deck} setDeck={setDeck} />
            <div id="bottom">
                version 0.1
            </div>
        </div>
    )
}