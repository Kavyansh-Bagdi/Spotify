import React from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const navigate = useNavigate();
    return(
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img onClick={()=>navigate(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>

                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden cursor-pointer md:block">Explore Premium</p>
                    <p className="bg-black text-white text-[15px] px-3 py-1 rounded-2xl cursor-pointer">Install App</p>
                    <p className="bg-green-500 font-bold cursor-pointer text-black w-7 h-7 rounded-full flex justify-center items-center">K</p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 cursor-pointer rounded-2xl">All</p>
                <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl">Music</p>
                <p className="bg-black text-white px-4 py-1 cursor-pointer rounded-2xl">Podcast</p>
            </div>

                
        </>
    )
}