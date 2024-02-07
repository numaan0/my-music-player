import React from 'react';
import ReactPlayer from 'react-player';

function MusicPlayer() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
        width='100%'
        height='50'
        playing={true}
        controls={true}
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },
          file: {
            attributes: {
              controlsList: 'nodownload'  // this is to prevent downloading of video files
            }
          }
        }}
      />
    </div>
  );
}

export default MusicPlayer;
