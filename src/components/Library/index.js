import React,{useState} from 'react';
import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';import { usePlaylist } from '../../PlaylistContext';
const LibraryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playlist } = usePlaylist();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(playlist)
  
  return (
    <div className='pb-32'>
      <div className="bg-white p-2 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Music Library</h2>
      </div>

      {/* <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr class=" border-b">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>          
        </tbody>
    </table>
</div> */}

<div class="relative pb-16">
    <table class="w-full text-md text-left rtl:text-right text-white">
    <tbody>
      {Array.isArray(playlist) && playlist.length > 0 ? (playlist.flatMap((song, index)=>(
        <tr class=" border-b" key={index}>
        <th scope="row" class="px-4 py-4 font-medium  whitespace-nowrap">
            {song.title.slice(0,20)}...
        </th>
        <td class="px-5 py-4">
            Play
        </td>
        <td class="px-6 py-4">
            Play Next
        </td>
    </tr>   
      ))):(
        <tr class=" border-b" key={index}>
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap">
                  No Songs to Play 
                </th>
            </tr>   
      )}
    </tbody>
    </table>
</div>
    </div>
  );
};

export default LibraryComponent;

// {Array.isArray(playlist) && playlist.length > 0 ? (
//   playlist.flatMap((item, index) =>
//     Array.isArray(item) ? item.map((song, i) => (

      
//     )) : (
     
//     )
//   )
// ) : (
//   <div>
//       No songs in the playlist
//   </div>
// )}