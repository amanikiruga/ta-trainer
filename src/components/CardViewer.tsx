
import CARDS from "../assets/cards.json" 

//TODO: Remove type: any
export function CardViewer(props : {className: string, activeCardIndex: number}) : JSX.Element { 

    
    
    return ( 
        <div className={props.className}>
            <h1>Card Viewer</h1>
            {CARDS[props.activeCardIndex]?.prompt}
        </div>
    )
}