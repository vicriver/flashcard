import Card from "../components/Card";
import InputField from "../components/Input";
import Top from "../nav/Top";

export default function Main() {
    return (
        <div>
            <Top />
            <div id="main">
                <Card />
                <InputField />
            </div>
            <div id="bottom">
                version 0.1
            </div>
        </div>
    )
}