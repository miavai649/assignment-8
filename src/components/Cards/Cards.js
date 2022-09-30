import React from 'react';
import "./Cards.css";

const Cards = (props) => {
    const {img, name, text, age, time, handleExerciseTime} = props
    return (
        <div className='cards-content'>
            <img src={img} alt="" />
            <div className="card-details">
            <h2>{name}</h2>
            <p>{text}</p>
            <p>For Age: <b>{age}</b></p>
            <p>Time required: <b>{time}min</b></p>
            <button onClick={()=>handleExerciseTime(props)} className='start-btn'>Start</button>
            </div>
        </div>
    );
};

export default Cards;