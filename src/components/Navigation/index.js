
import { FaHome, FaCompass, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MusicPlayer from './../MusicPlayer/index';


function Navigation({ currentlyPlayingItem, stopPlaying }){
     
    return(
        <div className='fixed bottom-0  w-full'>
        {currentlyPlayingItem && <MusicPlayer item={currentlyPlayingItem} stopPlaying={stopPlaying} />}
        <nav className='bg-slate-800'>
          <ul className='flex justify-around list-none p-4'>
            <li className='bg-white rounded p-1'><Link to="/"><FaHome  className='text-3xl'/> </Link></li>
            <li className='bg-white rounded p-1'><Link to="/explore"><FaCompass  className='text-3xl'/></Link></li>
            <li className='bg-white rounded p-1'><Link to="/profile"><FaUser className='text-3xl'/></Link></li>
          </ul>
        </nav>
        </div>
        
    );
}

export default Navigation;