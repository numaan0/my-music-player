import './App.css';
import React from 'react';
import Sidebar from './components/sidebar';
import MusicPlayer from './components/MusicPlayer';
import SearchBar from './components/search';
const App = () =>{
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
      <SearchBar/>
        <MusicPlayer/>
      </div>
    </div>

  );
};

export default App;
{/* <div className='main'>
        <SearchBar onSearchResults={handleSearchResults}/>
        {searchResults.length > 0 ? <SearchResults results={searchResults}/> : <MusicPlayer/>}
      </div> */}