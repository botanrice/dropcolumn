import { useState } from 'react';
import { Colorful } from '@uiw/react-color';
import { hsvaToHex } from '@uiw/color-convert';
import '@wcj/dark-mode';
import '../StoUniverse.css';
import '../Color.css';
import { UniverseButton } from '../Components';

const Color = () => {
  const [hsva, setHsva] = useState({ h: 0, s: 100, v: 0, a: 1 });
  const [textColor, setTextColor] = useState("#ffffff");

  let colorText = {"color": textColor};

  return (
    <div className="Universe" id="enter" style={{ background: hsvaToHex(hsva) }}>
      <dark-mode permanent light="Light" dark="Dark"></dark-mode>
      <div className="ColorHolder">
        <h1>color</h1>
        <div className="ColorBox">
          <p>listen to this song... </p>
          <audio controls>
            <source src="https://s3.amazonaws.com/dropcolumn.com/flexonem/waxxx.mp3" type="" />
          </audio>
        </div>
        <div className="ColorBox">
          <p>...then pick the color it makes you feel</p>
          <Colorful
            color={hsva}
            disableAlpha={true}
            onChange={(color) => {
              setHsva(color.hsva);
            }}
          />
        </div>
        <div style={{ background: hsvaToHex(hsva), marginTop: 30, padding: 10 }}>
          {JSON.stringify(hsvaToHex(hsva))}
        </div>
        <UniverseButton>Submit</UniverseButton>
      </div>
    </div>
  );
};

export default Color;
