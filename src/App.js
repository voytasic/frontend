import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>&</p>
        <a
          className="App-link"
          href="https://docker.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>

        </span>

        <p>App #9</p>
      </header>
    </div>
  );
}

export default App;
