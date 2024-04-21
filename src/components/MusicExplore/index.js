import React, { useState, useEffect } from 'react';
import { searchVideos, searchSongs } from '../../services/apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicPlayer from '../MusicPlayer';
import { MagnifyingGlass } from 'react-loader-spinner';
import './style.css';
import fallback from '../../assets/other/Designer.png'

function MusicExplore({ playItem }) {

    useEffect(() => {
        callApiPunjabi();
        callApiBollywood();
    }, []);

    // const [results, setResults] = useState(null);
    const [resultsBollywood, setResultsBollywood] = useState(null);
    const [resultsPunjabi, setResultsPunjabi] = useState(null);
    // const [itemPlaying, setItemPlaying] = useState(null);
    const [isLoadingBollywood, setLoaderBollywood] = useState(false)
    const [isLoading, setLoader] = useState(false)

    const callApiPunjabi = async (e) => {
        setLoader(true)
        // e.preventDefault();
        try {
            const resultsPunjabi = await searchSongs("Punjabi Latest 2024 trending", 30);
            setResultsPunjabi(resultsPunjabi);
        } catch (error) {
            console.log("Error", error);
            toast.error("Oops! Something went wrong with fetching explore music.", {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoader(false)
        }
    };

    const callApiBollywood = async (e) => {
        setLoaderBollywood(true)
        // e.preventDefault();
        try {
            const resultsBollywood = await searchSongs("Bollywood latest songs 2024 trending", 30);
            setResultsBollywood(resultsBollywood);
        } catch (error) {
            console.log("Error", error);
            toast.error("Oops! Something went wrong with fetching explore music.", {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setLoaderBollywood(false)
        }
    };
    //   console.log(results,"Nau");
    const getSongDetails = (item) => {
        // setItemPlaying(item);
        playItem(item);
        // setResults(null);
        // setTerm('');
    };



    return (
        <div className="p-4 pb-32 sm:pb-32 xs:pb-32">
            <h1 className="text-center mt-5 text-white text-2xl">Explore</h1>
            <h1 className=" mt-2 text-white text-2xl">Punjabi Music Trending</h1>
            <div className="p-4 border-solid bg-slate-800 rounded-md overflow-x-scroll">
                <div className="w-max flex space-x-4">
                    {isLoading ? (
                        <div className=" bg-slate-600 rounded-sm">
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="magnifying-glass-loading"
                                wrapperStyle={{}}
                                wrapperClass="magnifying-glass-wrapper"
                                glassColor="#c0efff"
                                color="#e15b64"
                            />
                        </div>
                    ) : (
                        // Render search results here (map over 'results' array)
                        Array.isArray(resultsPunjabi) &&
                        resultsPunjabi.map((item, index) => (
                            <div
                                onClick={() => getSongDetails(item)}
                                key={index}
                                className="w-full text-white  hover:bg-slate-900 cursor-pointer flex flex-col  w-card rounded-md"
                            >
                                <img
                                      src={item.thumbnail.thumbnails[0].url}
                                    // src={fallback}
                                    alt={item.title}
                                    className="w-full h-32 object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-2">
                                    {item.title.slice(0, 20)}
                                </h3>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <h1 className=" mt-2 text-white text-2xl">Bollywood Music Trending</h1>    
            <div className="p-4 border-solid bg-slate-800 rounded-md mt-5 overflow-x-scroll ">
                <div className="w-max flex space-x-4 ">
                    {isLoadingBollywood ? (
                        <div className="w-max bg-slate-600 rounded-sm">
                            <MagnifyingGlass
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="magnifying-glass-loading"
                                wrapperStyle={{}}
                                wrapperClass="magnifying-glass-wrapper"
                                glassColor="#c0efff"
                                color="#e15b64"
                            />
                        </div>
                    ) : (
                        // Render search results here (map over 'results' array)
                        Array.isArray(resultsBollywood) &&
                        resultsBollywood.map((item, index) => (
                            <div
                                onClick={() => getSongDetails(item)}
                                key={index}
                                className=" text-white  hover:bg-slate-900 cursor-pointer flex flex-col  w-card rounded-md"
                            >
                                <img
                                      src={item.thumbnail.thumbnails[0].url}
                                    // src={fallback}
                                    alt={item.title}
                                    className="w-full h-32 object-cover"
                                />
                                <h3 className="text-lg font-semibold mt-2">
                                    {item.title.slice(0, 20)}
                                </h3>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* {itemPlaying && <MusicPlayer itemPlaying={itemPlaying} />} */}

        </div>
    )

}

export default MusicExplore;