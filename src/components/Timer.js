import React from 'react';
import "../stylesheets/timer.css"
import "../stylesheets/pomodoro.css"

import Tasks from './Tasks';

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            minutes: 30,
            seconds: 0,
        }
    }

  
    componentDidMount () {
        this.countdownTimer()
        // console.log("this.props.setTime --> ", this.props.setTime([this.state.minutes, this.state.seconds]))
        // this.props.setTime(`${this.state.minutes} : ${this.state.seconds}`)
    }

    countdownTimer = () => {
        let setMinutes = setInterval(() => {
                this.setState({
                    minutes: this.state.minutes -1
                })
                return this.state.minutes
            }, 60000)

        let setSeconds = setInterval(() => {
            if(this.state.seconds) {
                this.setState({
                    seconds: this.state.seconds - 1
                })
                return this.state.seconds
            }
            this.setState({
                seconds: 59 
            })
        }, 1000)

        return setMinutes, setSeconds
    }






    render() {
        return (
        <div className="pom-container">
            <div className="timer-container">
                <Tasks />
                <h1 className="timer-clock">{this.state.minutes} : {this.state.seconds < 10 ? `0${this.state.seconds}` :  this.state.seconds }</h1>
            </div>
        </div>
        )

    }
}

export default Timer;