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
    return <div className={props.className}>{TAEntriesToShow}</div>;
};
