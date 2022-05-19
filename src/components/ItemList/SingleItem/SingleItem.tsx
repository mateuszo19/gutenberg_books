import React from 'react';
import './SingleItem.css';

interface Props{
    title: string,
    description: string
}

export const SingleItem = (props: Props) => {
    return(
        <>
            <div className={"single-element"}>
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
            </div>

        </>
    )
}
