import logo from './logo.svg';
import './App.css';
import useCountdownTimer from './components/timer/useCountdownTimer';

function App() {
  const [isTimeLeft, minutes, seconds] = useCountdownTimer(3,66)
  return (
    <div className="App">
      <header className="App-header">
        {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
