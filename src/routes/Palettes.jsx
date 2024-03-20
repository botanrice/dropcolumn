import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../StoUniverse.css';

const S3_URL = "https://s3.amazonaws.com/dropcolumn.com/flexonem/";


const Color = ({hex}) => {
  return (
    <div style={{background: hex}}>
      <p style={{color: hex}}>{hex}</p>
    </div>
  )
}

const TrackPalette = ({track}) => {
  return (
    <div>
      <p>{track.title}</p>
      <div>
        {track.colors.map(hex => {
          return(
            <Color hex={hex} />
          );
        })}
      </div>
    </div>
  );
}

const Palettes = () => {
  const [thisTrack, setThisTrack] = useState({});
  const [trackDB, setTrackDB] = useState({});

  useEffect(() => {
    let ignore = false;
    getData().then(result => {
      if (!ignore) {
        setTrackDB(result);
        setThisTrack(result[1]);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('tracks');
      console.log(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log("ERROR: ");
    }
  }

  async function initialPopulate() {
    try {
      const tracksInit = {
        1: {"title": "waxxx", "colors": ["#ffffff"], "link": S3_URL.concat("waxxx.mp3")}, 
        2: {"title": "pecans", "colors": ["#ffffff"], "link": S3_URL.concat("pecans.mp3")},
        3: {"title": "thunda", "colors": ["#ffffff"], "link": S3_URL.concat("thunda.mp3")}
      }
      await AsyncStorage.setItem('tracks', JSON.stringify(tracksInit));
      console.log('added');
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  async function clearDB() {
    storeData({});
  }


  return (
    <div className="Universe" id="enter">
      <h1>🎨 palettes</h1>
      <h2>all</h2>
      <div className="PaletteDisplay">
        {Object.keys(trackDB).map(key => {
          return(
            <div>
              <TrackPalette track={trackDB[key]} />
            </div>
          );
        })}
      </div>
      <button onClick={getData}>show</button>
      <button onClick={clearDB}>clear</button>
      <hr />
      <button onClick={initialPopulate}>populate</button>
    </div>
  );
};

export default Palettes;
