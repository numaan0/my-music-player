import React, { useState } from 'react';
import { searchVideos,searchSongs } from '../../services/apis';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from '../MusicPlayer';
import { MagnifyingGlass } from 'react-loader-spinner';
import './style.css';
const SearchBar = ({ playItem }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(null);
  // const [itemPlaying, setItemPlaying] = useState(null);
  const [isLoading, setLoader] = useState(false)

  // Function to call API
  const callApi = async (e) => {
    setLoader(true)
    e.preventDefault();
    try {
      const results = await searchSongs(term, 10);
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
    }finally{
      setLoader(false)
    }
  };

  const getSongDetails =(item)=> {
    // setItemPlaying(item);
    playItem(item);
    setResults(null);
    setTerm('');
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
    if (e.target.value === '') {
      setResults(null);
    }
  };

  return (
    <div className=' mt-4 ml-3 sm:w-4/5 xs:4/5'>
      <ToastContainer />
      <form onSubmit={callApi} className='flex gap-3'>
        <input 
          className="bg-slate-100 hover:bg-slate-100 text-gray-950 py-2 px-4 rounded-sm w-full"
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Search songs..."
        />
        <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full">Search</button>
      </form>

       
      {results && results.length > 0 && (
      <div className=' xs:w-3/4 overflow-x-hidden  absolute w-full z-50 h-1/3 rounded-md lg:w-2/3'>
        {isLoading ? (
          <div className='w-full bg-slate-600 rounded-sm'>
            {/* Loader */}
          </div> 
        ) : (
          // Render search results here (map over 'results' array)
          Array.isArray(results) &&
          results.map((item, index) => (
            <div
              key={index}
              className='bg-slate-600 text-white p-2 hover:bg-slate-900 cursor-pointer flex flex-row'
              onClick={() => getSongDetails(item)}
            >
              <label className='p-2 text-base'>{item.title}</label>
            </div>
          ))
        )}
      </div>
    )}

    {/* {itemPlaying && <MusicPlayer itemPlaying={itemPlaying} />} */}
  </div>
  );
};

export default SearchBar;
