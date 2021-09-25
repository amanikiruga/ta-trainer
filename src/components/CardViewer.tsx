
import CARDS from "../assets/cards.json" 
type CardViewerProps = { 
    className: string,
    isRevealAnswer: boolean,
    activeCardIndex: number

}
//TODO: Remove type: any
export function CardViewer(props : CardViewerProps) : JSX.Element { 

    
    
    return ( 
        <div className={props.className}>
            <h1>Card Viewer</h1>
            <h2>Prompt</h2>
            <p> {CARDS[props.activeCardIndex]?.prompt} </p>
            <h2>{props.isRevealAnswer && "Answer"}</h2>
            <p> { props.isRevealAnswer && CARDS[props.activeCardIndex]?.answer}</p>
        </div>
    )
}