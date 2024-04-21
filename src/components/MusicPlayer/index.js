import React, { useEffect, useState ,useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { searchSongs } from '../../services/apis';
import './style.css';
import { FaArrowCircleLeft, FaArrowCircleRight,FaPause, FaPlay } from 'react-icons/fa';

function MusicPlayer({ item, stopPlaying }) {
  const [playList, setPlaylist] = useState([]);
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
        const library = await searchSongs("trending songs", 10);
        setPlaylist(library);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  const handleNextSong = () => {
    const nextIndex = (currentIndex + 1) % playList.length; // Circular navigation
    setCurrentIndex(nextIndex);
    setCurrentItem(playList[nextIndex]); // Update the current item
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentIndex - 1 + playList.length) % playList.length; // Circular navigation
    setCurrentIndex(prevIndex);
    setCurrentItem(playList[prevIndex]); // Update the current item
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
        Currently Playing: {currentItem.title.slice(0, 20)}
      </h1>
      </div>
      <div>


  </div>
      <div className="flex justify-center w-full">
       
        <AudioPlayer
          autoPlay
          autoPlayAfterSrcChange
          showSkipControls={true}
          src={url}
          onPlay={(e) => console.log("onPlay", e)}
          crossOrigin="anonymous"
          className='rounded'
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
