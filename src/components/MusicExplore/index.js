import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from '../MusicPlayer';
import './style.css';
import fallback from '../../assets/other/Designer.png';
import MusicSection from '../../helper/musicExploreHelper';
import { useMusicContext } from '../../MusicContext';

const MusicExplore = ({ playItem }) => {
  const {
    resultsBollywood,
    isLoadingBollywood,
    resultsPunjabi,
    isLoadingPunjabi,
    resultsCokeStudio,
    isLoadingCokeStudio,
  } = useMusicContext();

  const getSongDetails = (item) => {
    playItem(item);
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