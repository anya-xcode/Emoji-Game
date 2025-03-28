import React, { useState, useRef } from 'react';

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1); // Default volume is 100%
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume; // Set the audio volume
  };

  return (
    <div>
      <h1>Emoji Game</h1>
      
      <audio ref={audioRef}>
        <source src="/audio/background-music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleMusic}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {/* Volume control */}
      <div>
        <label>Volume: </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      {/* Your game components */}
    </div>
  );
};

export default Game;
