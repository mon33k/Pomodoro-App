import React from 'react'
import "../stylesheets/pomodoro.css"
// import Timer from './Timer'

class Pomodoro extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    

    componentDidMount () {
        console.log("this.props.setTime --> ", this.props.setTime(12))

    }

    render() {

        return (
            <div className="pom-container">
                {/* <Timer /> */}
            </div>
        )
    }
}

export default Pomodoro;