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
  Typography
} from "@material-tailwind/react";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MusicPlayer from './../MusicPlayer/index';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}  className='h-7'>
     
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
           
              <Typography>
                to Scott, Alex, Jennifer
              </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
              <Typography
                
              >
                Sandra Adams
              </Typography>
            
          }
        />
      </ListItem>
    </List>
  );
}



function Navigation({ currentlyPlayingItem, stopPlaying }) {
  const [value, setValue] = useState('/');
  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMusicClick = () => {
    setOpenDialog(!openDialog);
  };

  // const handleCloseDialog = () =>{
  //   setOpenDialog(false);
  // };

  const renderDialog = () => {
    return (
      <Dialog
        open={openDialog}
        handler={handleMusicClick}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className='w-full h-1/2'
      >
        <DialogHeader className='text-xs'> <PlayArrowIcon /> Next to be played</DialogHeader>
        <DialogBody className=' overflow-y-scroll'>
          {AlignItemsList()}
        </DialogBody>
        <DialogFooter className='h-1/2'>
          <Button
            variant="text"
            color="red"
            onClick={handleMusicClick}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleMusicClick}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
  };



  return (
    <div className='fixed bottom-0 w-full'>
      {currentlyPlayingItem && <MusicPlayer item={currentlyPlayingItem} stopPlaying={stopPlaying} />}
      <nav className='bg-slate-800'>
        <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction  value="/" icon={<HomeIcon />} />
          </Link>
          <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
            <BottomNavigationAction  value="/explore" icon={<ExploreIcon />} />
          </Link>
          <Link to="/profile" >
            <BottomNavigationAction value="/profile" icon={<AccountCircleIcon />} />
          </Link>
          {/* <BottomNavigationAction label="Music" value="/Music" icon={<QueueMusicIcon />} onClick={handleMusicClick} /> */}
        </BottomNavigation>
      </nav>
      {renderDialog()}
    </div>
  );
}

export default Navigation;
