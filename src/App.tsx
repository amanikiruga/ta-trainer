import React, { useState } from "react";
import logo from "./logo.svg";
import CARDS from "./assets/cards.json";
import { ControlPanel } from "./components/ControlPanel";
import { CardViewer } from "./components/CardViewer";
import "./App.css";
import { Card } from "./interfaces/card";
import { TAList } from "./components/TAList";
function App(): JSX.Element {
    const getRandomCardIndex = () => {
        return Math.floor(Math.random() * CARDS.length);
    };
    const randIndex = getRandomCardIndex();
    const [currentCardId, setCurrentCardId] = useState<number>(randIndex);
    const [isRevealAnswer, setIsRevealAnswer] = useState<boolean>(false);
    const [TAEntries, setTAEntries] = useState<string[]>([""]);
    const addTAEntry = (entry: string) => {
        const newTAEntries = TAEntries.concat(entry);
        setTAEntries(newTAEntries);
    };
    return (
        <div className="App">
            <TAList className={""} TAEntries={TAEntries}></TAList>
            <div className="row">
                <ControlPanel
                    className={"row-item"}
                    promptBtnOnClick={setCurrentCardId}
                    answerBtnOnClick={setIsRevealAnswer}
                    isRevealAnswer={isRevealAnswer}
                    addTAEntry={addTAEntry}
                    randomCardIndexGenerator={getRandomCardIndex}
                />
                <CardViewer
                    className={"row-item"}
                    activeCardIndex={currentCardId}
                    isRevealAnswer={isRevealAnswer}
                />
            </div>
        </div>
    );
}

export default App;
