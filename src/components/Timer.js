import React from 'react';
import "../stylesheets/timer.css"
import "../stylesheets/pomodoro.css"

import Tasks from './Tasks';

const setMinutes = undefined

const setSeconds = undefined

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
        this.props.setTime(`${this.state.minutes} : ${this.state.seconds}`)

    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("prevProps --", prevProps)
        // console.log("prevState --- ", prevState)
        if(prevState.minutes !== this.state.minutes || prevState.seconds !== this.state.seconds) {
            this.props.setTime(`${this.state.minutes} : ${this.state.seconds}`)
        }

    }

    componentWillUnmount() {
        clearInterval(this.setMinutes)
        clearInterval(this.setSeconds)
    }

    countdownTimer = () => {
        this.setMinutes = setInterval(() => {
            if(this.state.minutes > 0) {
                this.setState({
                    minutes: this.state.minutes -1
                })
                return this.state.minutes
            } else {
                this.setState({
                    minutes: 30
                })
            }

        }, 60000)

        this.setSeconds = setInterval(() => {
            if(this.state.seconds !== 0) {
                this.setState({
                    seconds: this.state.seconds - 1
                })
                return this.state.seconds
            
            } else  {
                
                this.setState({
                    seconds: 59 
                })
            }
        }, 1000)
            return (
                this.setMinutes, 
                this.setSeconds
            )
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