import './App.css';
import Navbar from './components/Navbar';
import Pomodoro from './components/Pomodoro'
import Controls from './components/Controls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Pomodoro />
      <Controls />
    </div>
  );
}

export default App;
