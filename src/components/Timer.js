import React from 'react';
import "../stylesheets/timer.css"
import Tasks from './Tasks';

const Timer = () => {
    return (
        <div className="timer-container">
            <Tasks />
            <h1 className="timer-clock">25:00</h1>
        </div>
    )
}

export default Timer;