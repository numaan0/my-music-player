import React, { useEffect, useState ,useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { searchSongs, suggestions } from '../../services/apis';
import './style.css';
import { usePlaylist } from '../../PlaylistContext';
function MusicPlayer({ item, stopPlaying }) {
  const { playlist, addSongToPlaylist, removeSongFromPlaylist } = usePlaylist();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(item); // New state for the current item
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const handlePlayPause = () => {
    const audio = audioRef.current.audio.current; // Get the audio element

    if (isPlaying) {
      audio.pause(); // Pause the audio
    } else {
      audio.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const library = await suggestions(`${currentItem.videoId}`);
        addSongToPlaylist(library);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);
  const handleNextSong = () => {
    const flatPlaylist = playlist.flat(Infinity);
    const nextIndex = (currentIndex + 1) % flatPlaylist.length;
    setCurrentIndex(nextIndex);
    setCurrentItem(flatPlaylist[nextIndex]);
  };

  const handlePreviousSong = () => {
  const flatPlaylist = playlist.flat(Infinity); 
  const prevIndex = (currentIndex - 1 + flatPlaylist.length) % flatPlaylist.length;
  setCurrentIndex(prevIndex);
  setCurrentItem(flatPlaylist[prevIndex]); // Update the current item
  };

  useEffect(() => {
    // Update the currently playing item whenever 'item' prop changes
    setCurrentItem(item);
  }, [item]);

  const url = `https://backend-music-app-v1.onrender.com/stream/${currentItem.videoId}`;
  // const url = `http://localhost:3000/stream/${currentItem.videoId}`;

  return (
    <div className=" w-full">
      <div className='bg-white text-center'>
      <h1 className="text-center font-semibold ">
        Playing: {currentItem.title.slice(0, 20)}
      </h1>
      </div>
      <div>


  </div>
      <div className="flex justify-center w-full">
       
        <AudioPlayer
          autoPlay
          showSkipControls
          autoPlayAfterSrcChange
          showJumpControls={false}
          src={url}
          onPlay={(e) => console.log("onPlay", e)}
          crossOrigin="anonymous"
          ref={audioRef} 
          onEnded={handleNextSong} 
          onClickNext={handleNextSong}
          onClickPrev={handlePreviousSong}
          
        />
        
      </div>
    </div>
  );
}

export default MusicPlayer;
