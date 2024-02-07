import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const fetchData = async () => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: '',
        q: term,
        type: 'video,playlist'
      }
    });

    console.log(response.data.items);
  };

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' onChange={onInputChange} />
        <button type='submit' className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
