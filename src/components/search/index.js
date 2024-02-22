import React, { useState, useEffect } from 'react';
import { searchVideos } from '../../services/apis';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SearchBar = () => {
  // toast.configure();
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(null);



  const debounce = (fn, delay) => {
    let debounceTimer;
    return function(){
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(()=> fn.apply(context,args),delay);
      setResults(null);
    };
  };

  const debouncedSearchVideos = debounce((term) =>{
    searchVideos(term).then(setResults)
    .catch((error)=>{
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
    });
  }, 1000);

  useEffect(() => {
    if (term) {
      debouncedSearchVideos(term);
    } else {
      setResults(null); // Reset the results when the search bar is empty
    }
  }, [term]);


  // const onFormSubmit = event => {
  //   event.preventDefault();
  //   searchVideos();
  // };

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
        <div key={index} className='bg-slate-600 text-white p-2 hover:bg-slate-900 cursor-pointer flex flex-row'>
          <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} style={{width: '50px'}} />
           <label className='p-2'>
           {item.snippet.title}
            </label>
           
        </div>
      ))}

      </div>
    </div>
  );
};

export default SearchBar;
