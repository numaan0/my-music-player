// MusicContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { searchSongs } from './services/apis';

const MusicContext = createContext();

export const useMusicContext = () => {
  return useContext(MusicContext);
};

export const MusicProvider = ({ children }) => {
  const [resultsBollywood, setResultsBollywood] = useState(null);
  const [isLoadingBollywood, setIsLoadingBollywood] = useState(false);

  const [resultsPunjabi, setResultsPunjabi] = useState(null);
  const [isLoadingPunjabi, setIsLoadingPunjabi] = useState(false);

  const [resultsCokeStudio, setResultsCokeStudio] = useState(null);
  const [isLoadingCokeStudio, setIsLoadingCokeStudio] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoadingBollywood(true);
        const bollywoodData = await searchSongs('Bollywood Latest 2024 trending', 30);
        setResultsBollywood(bollywoodData);
      } catch (error) {
        console.error('Error fetching Bollywood data:', error);
        // Handle error (e.g., show a toast message or update UI state)
      } finally {
        setIsLoadingBollywood(false);
      }

      try {
        setIsLoadingPunjabi(true);
        const punjabiData = await searchSongs('Punjabi Music', 30);
        setResultsPunjabi(punjabiData);
      } catch (error) {
        console.error('Error fetching Punjabi data:', error);
        // Handle error
      } finally {
        setIsLoadingPunjabi(false);
      }

      try {
        setIsLoadingCokeStudio(true);
        const cokeStudioData = await searchSongs('Coke Studio Latest 2024', 30);
        setResultsCokeStudio(cokeStudioData);
      } catch (error) {
        console.error('Error fetching Coke Studio data:', error);
        // Handle error
      } finally {
        setIsLoadingCokeStudio(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    resultsBollywood,
    isLoadingBollywood,
    resultsPunjabi,
    isLoadingPunjabi,
    resultsCokeStudio,
    isLoadingCokeStudio,
  };

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
};
