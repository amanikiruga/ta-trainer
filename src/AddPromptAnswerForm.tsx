import { useState } from "react";
import ReactDOM from "react-dom";
import { Card, CardKind } from "./interfaces/card";

type AddPromptAnswerFormProps = {
    isOpen: boolean;
    currentCardsLength: Number;
    onCloseModalBtn: () => void;
};

const AddPromptAnswerForm = (props: AddPromptAnswerFormProps) => {
    const [, setPromptValue] = useState<Card>({
        id: props.currentCardsLength,
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
                    onClick={props.onClosePromptAnswerModalBtn({
                        id: props.currentCardsLength
                        kind: "TeachingEasy",
                        prompt: string,
                        answer: string,
                    })}
                >
                    Add Card
                </button>
                <input
                    id="addPromptBox"
                    value={promptValue}
                    onInput={(ev) =>
                        setPromptValue((ev.target as HTMLTextAreaElement).value)
                    }
                    placeholder="Add prompt"
                ></input>
                <input
                    id="addAnswerBox"
                    value={answerValue}
                    onInput={(ev) =>
                        setAnswerValue((ev.target as HTMLTextAreaElement).value)
                    }
                    placeholder="Add Answer"
                ></input>
            </div>
        </div>,
        document.getElementById("modal-root") as Element
    );
};

export default AddPromptAnswerForm;
