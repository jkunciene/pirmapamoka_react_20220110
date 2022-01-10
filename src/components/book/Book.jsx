import React from 'react';
import './Book.css';

const Book = (props) => {
    return (
        <div>
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p> Tikrų faktų įkvėpta sukrečianti istorija apie pataisos namus nepaklusnioms mergaitėms ir apie viltį, drąsą bei seserystę</p>
            <p> {props.price} $ </p>
        </div>
    )
}

export default Book
