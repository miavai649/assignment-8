import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Details from '../Details/Details';
import './Container.css';

const Container = () => {
    const [cards, setCards] = useState([]);
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    
    const handleExerciseTime = (card) =>{
        const newDetails = [...details, card]
        setDetails(newDetails)
    }

    return (
        <div className='container'>
            <div className="right-container">
                <div className='header-section'>
                <h1 className='header-title'>HOME WORKOUT</h1>
                <p className='header-text'>Exercise is labor without weariness</p>
                </div>
                <div className="cards">
                    {
                        cards.map(card => <Cards handleExerciseTime={handleExerciseTime} key={card.id} img={card.img} name={card.name} text={card.details} age={card.age} time={card.time}></Cards>)
                    }
                </div>
            </div>
            <div className="left-container">
                <Details details={details}></Details>
            </div>
        </div>
    );
};

export default Container;