import React from 'react';
import {Btn} from "../Btn/Btn";
import "./Header.css";


export const Header = () => {
    return(
        <>
            <header>
                <h1>
                    <strong>Jakaś</strong> nazwa
                </h1>
                <form className="search">
                    <input type="text"/>
                    <Btn>Szukaj</Btn>
                </form>
            </header>
        </>
    );
}
