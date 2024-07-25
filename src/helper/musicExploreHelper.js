import React from 'react';
import Loader from './loader';






const MusicSection = ({ title, isLoading, results, onClick }) => (
  <>
  
  <h1 className="ml-2 text-white text-xl">{title}</h1>
  <div className="p-2 border-solid rounded-md mt-0 overflow-x-scroll">
    <div className="w-max flex space-x-3">
      {isLoading ? (
        <Loader />
      ) : (
        Array.isArray(results) &&
        results.map((item, index) => (
          <div key={index} onClick={() => onClick(item)} className="text-white hover:bg-slate-900 cursor-pointer flex flex-col w-card rounded-md">
            <img
              src={item.thumbnail.thumbnails[0].url}
              alt={item.title}
             
              className="h-20 object-cover w-full max-w-[90%]"
            />
            <h3 className="text-sm ml-1 font-semibold mt-2">{item.title.slice(0, 20)}...</h3>
          </div>
        ))
      )}
    </div>
  </div>
  </>
);

export default MusicSection;