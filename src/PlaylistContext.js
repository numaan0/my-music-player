import React, { createContext, useState, useContext } from 'react';

const PlaylistContext = createContext();

export const usePlaylist = () => useContext(PlaylistContext);

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  
  const addSongToPlaylist = (song) => {
    setPlaylist([...playlist, ...song]);
  };

  const removeSongFromPlaylist = (songId) => {
    setPlaylist(playlist.filter(song => song.id !== songId));
  };

  // Other methods to manipulate playlist state as needed...

  return (
    <PlaylistContext.Provider value={{ playlist, addSongToPlaylist, removeSongFromPlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
};
