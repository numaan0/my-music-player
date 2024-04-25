import React, { useState, useEffect } from 'react';
import { searchSongs } from '../../services/apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from '../MusicPlayer';
import './style.css';
import fallback from '../../assets/other/Designer.png';
import MusicSection from '../../helper/musicExploreHelper';

const useApiData = (initialState, searchQuery, limit) => {
    const [results, setResults] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await searchSongs(searchQuery, limit);
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error(`Oops! Something went wrong with fetching ${searchQuery} music.`, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return [results, isLoading];
  };

const MusicExplore = ({ playItem }) => {
    const [resultsBollywood, isLoadingBollywood] = useApiData(null, "Bollywood Latest 2024 trending", 30);
    const [resultsPunjabi, isLoadingPunjabi] = useApiData(null, "Punjabi Music", 30);
    const [resultsCokeStudio, isLoadingCokeStudio] = useApiData(null, "Coke Studio Latest 2024", 30);
  
    const getSongDetails = (item) => {
      // setItemPlaying(item);
      playItem(item);
      // setResults(null);
      // setTerm('');
    };
    
  return (
    <div className="p-1 lg:pb-32 sm:pb-16 padding-bottom">
      <h1 className="text-center mt-1 text-white text-2xl">Explore</h1>
      

      {/* Bollywood Music Trending Section */}
      <MusicSection
        title="Bollywood Trending"
        isLoading={isLoadingBollywood}
        results={resultsBollywood}
        onClick={getSongDetails}
      />
      
      {/* Punjabi Music Trending Section */}
      <MusicSection
        title="Punjabi Trending"
        isLoading={isLoadingPunjabi}
        results={resultsPunjabi}
        onClick={getSongDetails}
      />
      <MusicSection
        title="Coke Studio"
        isLoading={isLoadingCokeStudio}
        results={resultsCokeStudio}
        onClick={getSongDetails}
      />
      
      <ToastContainer />
    </div>
  );
};


export default MusicExplore;
