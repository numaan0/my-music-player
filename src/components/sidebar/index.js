import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import yt_icon from '../../assets/other/yt_icon.png';
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
  } from "@material-tailwind/react";
import './style.css'; 
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setDialog] = React.useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen)
    }

    const handleDialog = () => {
        setDialog(!open);
        const content = document.getElementById('page-content');
        if (!open) {
            // If the dialog is about to open
            content.classList.add('dialog-open');
        } else {
            // If the dialog is about to close
            content.classList.remove('dialog-open');
        }
    }
    const playLists = [{'title':'Liked Music','name':'Auto Playlist'},{'title':'My Music','name':'Numan Nayeem'}
    ,{'title':'Prophec','name':'Numan Numyeem'},{'title':'Unknown Music','name':'Playlist'},
    ,{'title':'Prophec','name':'Numan Numyeem'},{'title':'Unknown Music','name':'Playlist'},
    ,{'title':'Prophec','name':'Numan Numyeem'},{'title':'Unknown Music','name':'Playlist'},
    ,{'title':'Prophec','name':'Numan Numyeem'},{'title':'Unknown Music','name':'Playlist'}]



    return (
        <div className="w-1/6 text-white h-screen p-7 border-r border-gray-600" id="page-content">
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
                <Button onClick={handleDialog} variant="gradient">
                <div className="flex flex-row bg-gray-600 rounded-lg justify-center items-center p-2 hover:bg-gray-500 cursor-pointer">
                   <span className="mr-2"><FaPlus /></span> <p className="">New playlist</p>
                </div>
                </Button> 
            </div>

            <div className="p-2 overflow-scroll  scrollbar-thumb-gray-400 scrollbar-thumb max-h-[20rem]">
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

            <Dialog
        size="xs"
        open={open}
        handler={handleDialog}
        className="bg-transparent shadow-none fixed inset-0 flex items-center justify-center z-8 rounded-xl"
      >
        <Card className="mx-auto w-full max-w-[24rem] bg-gray-400 text-white">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              New Playlist
            </Typography>
            <Input size="xl" placeholder="Title" className="w-full placeholder-white outline-none border-b-2"/>
            <Input  size="xl" placeholder="Description" className="w-full placeholder-white outline-none border-t-2" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleDialog} fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

        </div>
    );
};

export default Sidebar