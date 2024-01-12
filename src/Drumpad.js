import { useEffect } from "react";
import "./styles.css";

export default function Drumpad({ keyPad, clipName, clip, onKeyPress }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === keyPad) {
        playAudio();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyPad]);

  const playAudio = () => {
    onKeyPress(clipName);
    const audio = document.getElementById(keyPad);
    audio.currentTime = 0;
    audio.play();
  };
  return (
    <div className="drum-pad" id={clipName} onClick={playAudio}>
      {keyPad}
      <audio id={keyPad} className="clip" src={clip}></audio>
    </div>
  );
}
