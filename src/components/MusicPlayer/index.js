import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../../assets/musicPlayer/song.mp3'
function MusicPlayer() {
  return (

  <div class="fixed bottom">
    <AudioPlayer
      autoPlay
      src={song}
      onPlay={e => console.log("onPlay")}
  />
  </div>     
  );
}

export default MusicPlayer;
