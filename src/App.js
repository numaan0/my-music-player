import './App.css';
import React,{useState} from 'react';
import Sidebar from './components/sidebar';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/search';
import MusicExplore from './components/MusicExplore';
const App = () =>{
  const [currentlyPlayingItem, setCurrentlyPlayingItem] = useState(null);

  const playItem = (item) => {
    setCurrentlyPlayingItem(item);
  };

  const stopPlaying = () => {
    setCurrentlyPlayingItem(null);
  };

  return (
    <div className='flex'>
    <div className='w-1/6 md:w-14 sm:w-10'>
      <Sidebar/>
    </div>
    <div className='w-11/12 overflow-hidden'>
    <SearchBar playItem={playItem}/>
    <MusicExplore playItem={playItem} />
    {currentlyPlayingItem && <MusicPlayer item={currentlyPlayingItem} stopPlaying={stopPlaying} />}
    </div>
  </div>
  );
};

export default App;
