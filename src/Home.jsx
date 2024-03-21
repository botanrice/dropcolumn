import { useState } from 'react';
import logo from '../public/DCWW_white.png';
import './Home.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <a
            className="smol-link App-link"
            href="https://dropcolumn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ← DCWW Global HQ
          </a>
        </p>
        <h1 className="App-link">
          ENTER
        </h1>
        <span style={{background: '#4a464c'}}> 💫 </span>
        <p>
          <a
            className="App-link"
            href="#/enter"
          >
            <b>sto's universe →</b>
          </a>
        </p>
        <a className="App-link" href="#/color">colors</a>
      </header>
    </div>
  );
};

export default App;
