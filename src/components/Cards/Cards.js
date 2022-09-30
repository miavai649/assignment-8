import React from 'react';
import "./Cards.css";

const Cards = (props) => {
    return (
        <div className='cards-content'>
            <img src={props.img} alt="" />
            <div className="card-details">
            <h2>{props.name}</h2>
            <p>{props.text}</p>
            <p>For Age: <b>{props.age}</b></p>
            <p>Time required: <b>{props.time}</b></p>
            <button className='start-btn'>Start</button>
            </div>
        </div>
    );
};

export default Cards;