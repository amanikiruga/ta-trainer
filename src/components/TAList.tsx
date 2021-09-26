type TAListProps = {
    className: string;
    TAEntries: string[];
};

export const TAList = (props: TAListProps): JSX.Element => {
    let TAEntriesToShow = (
        <ol>
            {props.TAEntries.map((entry) => {
                return <li> {entry} </li>;
            })}
        </ol>
    );
    return (
        <div className={props.className} id="ta-list">
            <h1> Order </h1>
            {TAEntriesToShow}
        </div>
    );
};
