import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import yt_icon from '../../assets/other/yt_icon.png';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen)
    }

    const playLists = [{'title':'Liked Music','name':'Auto Playlist'},{'title':'My Music','name':'Numan Nayeem'}
    ,{'title':'Prophec','name':'Numan Numyeem'},{'title':'Unknown Music','name':'Playlist'},]


    return (
        <div className="w-1/6 text-white h-screen p-7 border-r border-gray-600">
            <div className="border-b border-gray-200 pb-5">
                <div className="flex flex-row">
                    <div className="p-3 text-2xl hover:bg-gray-500 rounded-2xl " onClick={handleSideBar}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="flex p-2 justify-center items-center">
                        <img src={yt_icon} className="object-contain h-7 w-8" alt="Icon"></img>
                        <spam className="text-3xl">Music</spam>
                    </div>
                </div>
                <div className="text-2xl p-2">
                    <div className="flex flex-row hover:bg-gray-500 rounded-lg cursor-pointer">
                        <p className="p-2 flex items-center justify-start"><FaHome /> </p>
                        <p className="m-2 p-2 flex justify-center">Home</p>
                    </div>
                    <div className="flex flex-row hover:bg-gray-500 rounded-lg cursor-pointer">
                        <p className="p-2 flex items-center justify-start"><FaCompass /> </p>
                        <p className="m-2 p-2 flex justify-center">Explore</p>
                    </div>
                    <div className="flex flex-row hover:bg-gray-500 rounded-lg cursor-pointer">
                        <p className="p-2 flex items-center justify-start"><FaMusic /> </p>
                        <p className="m-2 p-2 flex justify-center">Library</p>
                    </div>
                </div>
            </div>
            <div className="p-2 mt-2">
                <div className="flex flex-row bg-gray-600 rounded-lg justify-center items-center p-2 hover:bg-gray-500 cursor-pointer">
                   <span className="mr-2"><FaPlus /></span> <p className="">New playlist</p>
                </div>
            </div>

            <div className="p-2 overflow-y-scroll scrollbar-thin">
                {playLists.map((item, index)=>(
                    <div key={index} className="p-2 flex justify-between group hover:bg-gray-500 rounded-lg">
                        <div> <p className="">{item.title}</p>
                        <p className="text-xs text-gray-400 group-hover:text-gray-200">{item.name}</p> 
                        </div>
                        <div className="flex  text-white items-center opacity-0 group-hover:opacity-100 cursor-pointer">
                            <FaPlay/>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar