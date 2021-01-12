import React from 'react'
import "../stylesheets/controls.css"

class Controls extends React.Component {
    constructor() {
        super() 
        this.state ={ 

        }
    }




    render() {
        return(
            <div className="control-container">
                <button className="start-btn">Start</button>
                <button className="end-btn">End</button>
            </div>
        )
    }
}

export default Controls