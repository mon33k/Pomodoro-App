import React from 'react'
import "../stylesheets/pomodoro.css"
import Timer from './Timer'

class Pomodoro extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="pom-container">
                <Timer />
            </div>
        )
    }
}

export default Pomodoro;