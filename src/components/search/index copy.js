import React, { useState, useEffect } from 'react';
import { searchVideos,searchSongs } from '../../services/apis';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from '../MusicPlayer';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(null);
  const [videoId, setVideoId] = useState(null);

  // Debounce function
  const debounce = (fn, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => fn.apply(context, args), delay);
    };
  };

  // Function to call API
  const callApi = async () => {
    try {
      const results = await searchSongs(term);
      setResults(results);
    } catch (error) {
      console.log("Error", error);
      toast.error("Oops! Something went wrong.", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Debounced version of API call
  const debouncedCallApi = debounce(callApi, 1000);

  useEffect(() => {
    if (term) {
      debouncedCallApi();
    } else {
      setResults(null); // Reset the results when the search bar is empty
    }
  }, [term]);

  const getSongDetails = item => {
    setVideoId(item.videoId);
    setResults(null);
    setTerm('');
  };

  return (
    <div className='w-1/2 mt-4 ml-3'>
      <ToastContainer />
      <input 
        className="bg-slate-800 hover:bg-slate-950 text-white py-2 px-4 rounded-full w-full"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search videos..."
      />
       
      <div>
        {Array.isArray(results) && results.map((item, index) => (
          <div key={index} className='bg-slate-600 text-white p-2 hover:bg-slate-900 cursor-pointer flex flex-row' onClick={() => getSongDetails(item)}>
            <img src={item.thumbnail} alt={item.title} style={{width: '50px'}} />
            <label className='p-2'>
              {item.title}
            </label>
          </div>
        ))}
      </div>
      {videoId && <MusicPlayer videoId={videoId} />}
    </div>
  );
};

export default SearchBar;
