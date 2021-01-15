import React from 'react'
import "../stylesheets/controls.css"

class Controls extends React.Component {
    constructor() {
        super() 
        this.state ={ 
            break: 5,
            sound: "on"
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer = (e) => {
        e.preventDefault()
        console.log("start timer")
    }

    stopTimer = (e) => {
        e.preventDefault()
        console.log("end timer")
    }

    pauseTimer = () => {
        console.log("pause timer")
    }

    resetTimer = () => {
        console.log("reset timer")
    }



    render() {

        return(
            <div className="control-container">
                <button onClick={this.startTimer} className="start-btn">Start</button>
                <button onClick={this.stopTimer} className="end-btn">End</button>
            </div>
        )
    }
}

export default Controls