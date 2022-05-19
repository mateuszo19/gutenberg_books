import React from 'react';
import "./ItemList.css";
import {SingleItem} from "./SingleItem/SingleItem";

export const ItemList = () => {
    return(
        <>
            <SingleItem title="Władca pierścieni" description="opis"/>
            <SingleItem title="Hobbit 3" description="asdas"/>
            <SingleItem title="Hobbit" description="opis2"/>
        </>
    )
}
