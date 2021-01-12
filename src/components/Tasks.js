import React from 'react';
import "../stylesheets/tasks.css";

// For now this will just be basic CRUD for Tasks

class Tasks extends React.Component {
    constructor() {
        super()
        this.state ={

        }
    }

    render() {
        return (
            <div className="task-container">
                <p className="task-item">Do Laundry</p>
            </div>
        )
    }
}

export default Tasks;