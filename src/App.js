import logo from './logo.svg';
import './App.css';

function App() {

  require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
  
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
        <p>App v1.0.1</p>
      </header>
    </div>
  );
}

export default App;
