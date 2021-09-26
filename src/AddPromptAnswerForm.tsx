import { useState } from "react";
import ReactDOM from "react-dom";
import { Card, CardKind } from "./interfaces/card";

type AddNewCardFormProps = {
    isOpen: boolean;
    currentCardsLength: number;
    onCloseModalBtn: () => void;
    onAddNewCardBtn: (newCardToAdd: Card) => void;
};

const AddNewCardForm = (props: AddNewCardFormProps) => {
    const [newCardValue, setNewCardValue] = useState<Card>({
        id: props.currentCardsLength + 1,
        kind: "TeachingEasy" as CardKind,
        prompt: "",
        answer: "",
    });

    if (!props.isOpen) return null;

    return ReactDOM.createPortal(
        <div>
            <div className="non-modal-overlay" />
            <div className="modal">
                <button
                    onClick={() => {
                        props.onAddNewCardBtn(newCardValue);
                        props.onCloseModalBtn();
                    }}
                >
                    Add Card
                </button>
                <input
                    id="addPromptBox"
                    value={newCardValue.prompt}
                    onInput={(ev) => {
                        setNewCardValue({
                            ...newCardValue,
                            prompt: (ev.target as HTMLTextAreaElement).value,
                        });
                    }}
                    placeholder="Add prompt"
                ></input>
                <input
                    id="addAnswerBox"
                    value={newCardValue.answer}
                    onInput={(ev) => {
                        setNewCardValue({
                            ...newCardValue,
                            answer: (ev.target as HTMLTextAreaElement).value,
                        });
                    }}
                    placeholder="Add Answer"
                ></input>
                <select
                    onChange={(ev) => {
                        setNewCardValue({
                            ...newCardValue,
                            kind: ev.target.value as CardKind,
                        });
                    }}
                >
                    <option disabled selected hidden>
                        Select the kind of question
                    </option>
                    {Object.values(CardKind).map((el) => {
                        return <option>{el}</option>;
                    })}
                </select>
            </div>
        </div>,
        document.getElementById("modal-root") as Element
    );
};

export default AddNewCardForm;
