import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Pomodoro from './components/Pomodoro'
import Timer from './components/Timer';
import Controls from './components/Controls'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      time: ""
    }
  }

  setTime = (currTime) => {
    this.setState({
      time: currTime
    })
  }

  componentDidMount() {

  }


  render() {
    console.log("this.state.time --> ", this.state.time)


    return (
      <div className="App">
        <Navbar />
        <Timer setTime={this.setTime} time={this.state.time}/>
        <Controls />
      </div>
    );

  }
}

export default App;
 