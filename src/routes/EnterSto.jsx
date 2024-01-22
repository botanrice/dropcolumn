import { useState } from 'react';
import '../StoUniverse.css';

const EnterSto = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Universe">
      <h1>sto's universe</h1>
      <p className="Transmission typewriter">You are now about to enter a text-facilitated galactic exploration, art gallery, and adventure.</p>
      <p className="Transmission">Explore the universe by clicking on the hyperlinks available on each page. 
        There may be hidden easter eggs along the way, so keep an eye out for unidentifiable objects.
      </p>
    </div>
  );
};

export default EnterSto;
