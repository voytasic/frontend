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
        </span>
        <p>App v.0.0.13</p>
      </header>
    </div>
  );
}

export default App;
