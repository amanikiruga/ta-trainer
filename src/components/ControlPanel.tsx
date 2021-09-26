import { useState } from "react";

type ControlPanelProps = {
    className: string;
    promptBtnOnClick: (value: number) => void;
    answerBtnOnClick: (value: boolean) => void;
    isRevealAnswer: boolean;
    addTAEntry: (value: string) => void;
    shuffleTAEntries: () => void;
    randomCardIndexGenerator: () => number;
    onOpenModalBtn: () => void;
};

export const ControlPanel = (props: ControlPanelProps): JSX.Element => {
    const [addTAInputBox, setAddTAInputBox] = useState<string>("");

    return (
        <div className={props.className}>
            <h1>Control Panel </h1>

            <input
                id="addTABox"
                value={addTAInputBox}
                onInput={(ev) =>
                    setAddTAInputBox((ev.target as HTMLTextAreaElement).value)
                }
                placeholder="Add first and last name"
            ></input>
            <button onClick={props.shuffleTAEntries}>Shuffle order</button>
            <button onClick={props.onOpenModalBtn}>Add Cards</button>
            <button onClick={() => props.addTAEntry(addTAInputBox)}>
                Add TA
            </button>
            <button
                onClick={() =>
                    props.promptBtnOnClick(props.randomCardIndexGenerator())
                }
            >
                Swap Card
            </button>
            <button
                onClick={() => props.answerBtnOnClick(!props.isRevealAnswer)}
            >
                Show Answer
            </button>
        </div>
    );
};
