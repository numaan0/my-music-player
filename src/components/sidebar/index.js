import React, {useState} from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import yt_icon from '../../assets/other/yt_icon.png';
const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBar = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="w-1/6 text-white h-screen p-7 border-r border-white">
           <div className="flex flex-row">
            <div className="p-3 text-2xl hover:bg-gray-500 rounded-2xl " onClick={handleSideBar}>
                {isOpen ? <FaTimes/> : <FaBars/>}
            </div>
            <div className="flex p-2 justify-center items-center">
                <img src={yt_icon} className="object-contain h-7 w-8" alt="Icon"></img>
                <spam className="text-3xl">Music</spam>
            </div>
           </div>
           <div className="text-2xl p-2">
               <div className="flex flex-row hover:bg-gray-400 rounded-lg">
                  <p className="p-2 flex items-center justify-start"><FaHome/> </p>
                  <p className="m-2 p-2 flex justify-center">Home</p>
              </div>
               <div className="flex flex-row hover:bg-gray-400 rounded-lg">
                  <p className="p-2 flex items-center justify-start"><FaCompass/> </p>
                  <p className="m-2 p-2 flex justify-center">Explore</p>
              </div>
               <div className="flex flex-row hover:bg-gray-400 rounded-lg">
                  <p className="p-2 flex items-center justify-start"><FaMusic/> </p>
                  <p className="m-2 p-2 flex justify-center">Library</p>
              </div>
                {/* <li className="m-2 p-2">Explore</li>
                <li className="m-2 p-2">Library</li> */}
            
           </div>


        </div>    
    );
};

export default Sidebar