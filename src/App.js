import "./styles.css";
import Drumpad from "./Drumpad";
import { useState, useEffect } from "react";

const drumSet = [
  {
    keyPad: "Q",
    clipName: "Heater 1",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyPad: "W",
    clipName: "Heater 2",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyPad: "E",
    clipName: "Heater 3",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyPad: "A",
    clipName: "Heater 4",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyPad: "S",
    clipName: "Clap",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyPad: "D",
    clipName: "Open-HH",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyPad: "Z",
    clipName: "Kick-n'-Hat",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyPad: "X",
    clipName: "Kick",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyPad: "C",
    clipName: "Closed-HH",
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

export default function App() {
  const [pressedKey, setPressedKey] = useState("Press or click key to play");

  const handleKeyPress = (clipName) => {
    setPressedKey(clipName);
  };

  return (
    <div className="App">
      <div className="wrapper" id="drum-machine">
        <div className="panel">
          <div id="display">{pressedKey}</div>
        </div>
        <div className="drumPads">
          {drumSet.map((pad) => {
            return (
              <Drumpad key={pad.keyPad} {...pad} onKeyPress={handleKeyPress} />
            );
          })}
        </div>
      </div>
      <footer>
        <p>
          by <a href="https://github.com/viesant">Viesant</a>
        </p>
      </footer>
    </div>
  );
}
