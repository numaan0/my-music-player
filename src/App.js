import './App.css';
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBar from './components/search';
import MusicExplore from './components/MusicExplore';
import Navigation from './components/Navigation';
import CacheBuster from 'react-cache-buster';
import packageFile from '../package.json'
import CacheLoader from './helper/cacheLoader';
import LibraryComponent from './components/Library';
import { PlaylistProvider } from './PlaylistContext';
import { MusicProvider } from './MusicContext'; 
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

  return (
    <>
    {/* <SearchBar playItem={playItem} /> */}
    <p className='text-yellow-100 text-4xl mt-2'>Soon to be released...</p>;
    </>
  )
};

const Profile = () => {
  // Your Profile component code here
  <>
  {/* <SearchBar playItem={playItem} /> */}
  <p className='text-yellow-100 text-4xl mt-2'>Soon to be released...</p>;
  </>
};

const App = () => {
  const {version} = packageFile;
  const [currentlyPlayingItem, setCurrentlyPlayingItem] = useState(null);
  const isProduction = process.env.NODE_ENV === 'production';
  // const isProduction = true
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<CacheLoader />} //If not pass, nothing appears at the time of new version check.
      metaFileDirectory={'.'} //If public assets are hosted somewhere other than root on your server.
    >
<BrowserRouter>
<MusicProvider>
<PlaylistProvider>
      <div className='min-h-screen flex flex-col overflow-hidden'>
        <Routes>
          <Route
            path="/"
            element={<Home currentlyPlayingItem={currentlyPlayingItem} setCurrentlyPlayingItem={setCurrentlyPlayingItem} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          {currentlyPlayingItem && <Route path="/library" element={<LibraryComponent />} />}
        </Routes>
      <Navigation currentlyPlayingItem={currentlyPlayingItem} stopPlaying={() => setCurrentlyPlayingItem(null)}/>
      </div>
      </PlaylistProvider>
      </MusicProvider>
    </BrowserRouter>
    </CacheBuster>
  );
};

export default App;
