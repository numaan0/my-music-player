import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { searchSongs } from '../../services/apis';
import './style.css';

function MusicPlayer({ item, stopPlaying }) {
  const [playList, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(item); // New state for the current item

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

  return (
    <div className="fixed bottom mt-2">
      <h1 className="text-center font-semibold bg-white">
        Currently Playing: {currentItem.title.slice(0, 20)}
      </h1>
      <div className="flex justify-center">
        <AudioPlayer
          autoPlayAfterSrcChange
          showSkipControls={false}
          src={url}
          onPlay={(e) => console.log("onPlay", e)}
          crossOrigin="anonymous"
        />
        <button onClick={handlePreviousSong}>Previous Song</button>
        <button onClick={handleNextSong}>Next Song</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
