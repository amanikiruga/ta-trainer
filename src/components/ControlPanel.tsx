export const ControlPanel = (props : {className: string, btnOnClick: (value: number) => void, randomCardIndexGenerator: () => number}) : JSX.Element => { 
    return ( 
        <div className={props.className}>
            <h1>Control Panel </h1>
            <button onClick= {() => props.btnOnClick(props.randomCardIndexGenerator())}> Swap Card</button>
        </div>
    )
}