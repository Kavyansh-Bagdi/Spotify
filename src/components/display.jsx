import React,{useEffect, useRef} from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import Home from "./displayhome";
import Album from "./displayalbum";
import { albumsData } from "../assets/assets/assets";

export default function Display(){
    
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : null;
    const bgcolor = albumId !== null ? albumsData[Number(albumId)].bgColor : null;

    useEffect(() => {
        if(bgcolor){
            displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;
        }
        else{
            displayRef.current.style.background = `#121212`;
        }
    });

    return(
        <div ref={displayRef} className="w-[90%] m-2 px-6 pt-4 rounded bg-[#121212] text-while overflow-auto lg:w-[75%] lg:ml-0">
            <Routes>
                <Route path="/spotify/"  element={<Home/>}/>
                <Route path="/album/:id"  element={<Album/>}/>
            </Routes>
        </div>
    )
}
