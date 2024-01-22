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
        <p>
          <a
            className="App-link"
            href="/enter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>ENTER sto's universe →</b>
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
