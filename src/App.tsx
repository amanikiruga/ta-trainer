import React, { useState } from "react";
import logo from "./logo.svg";
import CARDS from "./assets/cards.json";
import { ControlPanel } from "./components/ControlPanel";
import { CardViewer } from "./components/CardViewer";
import "./App.css";
import { Card } from "./interfaces/card";
import { TAList } from "./components/TAList";
import { Type } from "typescript";
import AddPromptAnswerForm from "./AddPromptAnswerForm";
function App(): JSX.Element {
    const getRandomCardIndex = () => {
        return Math.floor(Math.random() * CARDS.length);
    };
    const randIndex = getRandomCardIndex();
    const [currentCardId, setCurrentCardId] = useState<number>(randIndex);
    const [isRevealAnswer, setIsRevealAnswer] = useState<boolean>(false);
    const [TAEntries, setTAEntries] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const shuffleListOfItems = <T extends unknown>(listOfItems: Array<T>) => {
        let listOfItemsCopy = listOfItems.slice();
        for (let i = 0; i < listOfItemsCopy.length; i++) {
            const randIndex = Math.floor(
                Math.random() * listOfItemsCopy.length
            );
            //swap them randomly
            [listOfItemsCopy[i], listOfItemsCopy[randIndex]] = [
                listOfItemsCopy[randIndex],
                listOfItemsCopy[i],
            ];
        }
        return listOfItemsCopy;
    };

    const shuffleTAEntries = () => {
        const shuffledTAEntries = shuffleListOfItems(TAEntries);
        setTAEntries(shuffleListOfItems);
    };

    const addTAEntry = (entry: string) => {
        const newTAEntries = TAEntries.concat(entry);
        setTAEntries(newTAEntries);
    };
    return (
        <div className="App">
            <TAList className={""} TAEntries={TAEntries}></TAList>
            <div className="row">
                <AddPromptAnswerForm
                    isOpen={isOpen}
                    onCloseModalBtn={() => setIsOpen(false)}
                />
                <ControlPanel
                    className={"row-item"}
                    promptBtnOnClick={setCurrentCardId}
                    answerBtnOnClick={setIsRevealAnswer}
                    isRevealAnswer={isRevealAnswer}
                    addTAEntry={addTAEntry}
                    shuffleTAEntries={shuffleTAEntries}
                    randomCardIndexGenerator={getRandomCardIndex}
                    onOpenModalBtn={() => setIsOpen(true)}
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
