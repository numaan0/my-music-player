import React,  { useEffect }  from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { searchVideos,searchSongs } from '../../services/apis';
import './style.css';
function MusicPlayer({ item, stopPlaying }) {
  const url = `https://backend-music-app-v1.onrender.com/stream/${item.videoId}`;
  // console.log(item, stopPlaying);
  // const url = `http://localhost:3000/stream/${item.videoId}`;
  // const  callLibrary = async () =>{

  //   const library = await searchSongs("trending songs", 10)
  //   console.log(library)
  // }

  useEffect(()=>{
    const timer = setTimeout(async () =>{
      const library = await searchSongs("trending songs", 10)
      console.log(library)
    }, 3000)
    return () => clearTimeout(timer);
  },[]);


  return (

  <div class="fixed bottom mt-2">
    <h1 className='text-center font-semibold bg-white'>Currently Playing: {item.title.slice(0,20)}</h1>
    <div className='flex justify-center'>

    <AudioPlayer
      autoPlayAfterSrcChange
      showSkipControls={false}
      src={url}
      onPlay={e => console.log("onPlay",e)}
      crossOrigin="anonymous"
  />
  <button >Previous Song</button>
      <button >Next Song</button>
    </div>
  </div>     
  );
}

export default MusicPlayer;
