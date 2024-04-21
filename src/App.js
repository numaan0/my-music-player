import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './components/search';
import MusicExplore from './components/MusicExplore';
import MusicPlayer from './components/MusicPlayer';
import Navigation from './components/Navigation';

const Home = ({ currentlyPlayingItem, setCurrentlyPlayingItem }) => {
  const playItem = (item) => {
    setCurrentlyPlayingItem(item);
  };

  const stopPlaying = () => {
    setCurrentlyPlayingItem(null);
  };

  return (
    <div>
      <SearchBar playItem={playItem} />
      <MusicExplore playItem={playItem} />
      {/* {currentlyPlayingItem && <MusicPlayer item={currentlyPlayingItem} stopPlaying={stopPlaying} />} */}
    </div>
  );
};

const Explore = () => {
  // Your Explore component code here
  return <div>Explore Component</div>;
};

const Profile = () => {
  // Your Profile component code here
  return <div>Profile Component</div>;
};

const App = () => {
  const [currentlyPlayingItem, setCurrentlyPlayingItem] = useState(null);

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col overflow-hidden'>
        <Routes>
          <Route
            path="/"
            element={<Home currentlyPlayingItem={currentlyPlayingItem} setCurrentlyPlayingItem={setCurrentlyPlayingItem} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation currentlyPlayingItem={currentlyPlayingItem} stopPlaying={() => setCurrentlyPlayingItem(null)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
