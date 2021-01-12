import React from 'react'
import "../stylesheets/navbar.css"

const Navbar = () => {
    return (
        <div>
            <h4 className="app-header">Pomodoro</h4>
            <ul className="nav-container">
                <li>Home</li>
                <li>About</li>
                <li>Tasks</li>
            </ul>
        </div>
    )
}

export default Navbar