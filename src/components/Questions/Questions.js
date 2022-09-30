import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h1>Questions & Answers</h1>
            <div className='answers'>
                <p className='question'>Question-01: How dose react work?</p>
                <hr />
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
            </div>
            <div className='answers'>
                <p className='question'>Question-02: What are the use of useEFfect?</p>
                <hr />
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
            <div className='answers'>
                <p className='question'>Question-03: What is the difference between props and state?</p>
                <hr />
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
        </div>
    );
};

export default Questions;