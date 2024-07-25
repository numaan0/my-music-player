import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaHome, FaCompass, FaUser } from 'react-icons/fa';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicPlayer from './../MusicPlayer/index';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';






function Navigation({ currentlyPlayingItem, stopPlaying }) {
  const [value, setValue] = useState('/');
  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const handleMusicClick = () => {
    setOpenDialog(!openDialog);
    const content = document.getElementById('page-content');
    if (!openDialog) {
      content.classList.add('dialog-open');
    } else {
      content.classList.remove('dialog-open');
    }
  };

  // const handleCloseDialog = () =>{
  //   setOpenDialog(false);
  // };





  return (
    <div className='fixed bottom-0 w-full' id='page-content'>
      {currentlyPlayingItem && <MusicPlayer item={currentlyPlayingItem} stopPlaying={stopPlaying}  />}
      <nav className='bg-slate-800'>
        <BottomNavigation sx={{ width: '100%',height: '54px', padding:'12px'}} value={value} onChange={handleChange}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction  value="/" icon={<HomeIcon style={{ fontSize:'2.1rem' }} />} className='mt-1'/>
          </Link>
          <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction  className='mt-1' value="/explore" icon={<ExploreIcon style={{ fontSize:'2.1rem' }}/>} />
          </Link>
          <Link to="/profile" >
            <BottomNavigationAction className='mt-1' value="/profile" icon={<AccountCircleIcon style={{ fontSize:'2.1rem' }} />} />
          </Link>
          {currentlyPlayingItem && <Link to="/library" >
            <BottomNavigationAction className='mt-1' value="/library" icon={<QueueMusicIcon style={{ fontSize:'2.1rem' }} />} />
          </Link>}
          {/* <BottomNavigationAction className='p-0'  value="/Music" icon={<QueueMusicIcon style={{ fontSize:'2.1rem' }} />} /> */}
          {/* <BottomNavigationAction className='p-0'  value="/Music" icon={<QueueMusicIcon style={{ fontSize:'2rem' }} />} onClick={handleMusicClick} /> */}
        </BottomNavigation>
        </nav>
        
      {/* {renderDialog()} */}
    
    </div>
  );
}

export default Navigation;
