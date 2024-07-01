import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import { PlayerContext } from "../context/playercontext";

const Player = () => {
    const {seekbar,seekbg,track,playstatus,time,pause,play,previous,next,seeksong} = useContext(PlayerContext);
    return (
        <div className="h-[10%] flex bg-black justify-between items-center text-white px-4">
             <div className="hidden lg:flex items-center gap-4">
                <img src={track.image} alt="" className="w-12" />
                <div className="">
                    <p>{track.name}</p> 
                    <p>{track.desc.slice(0,12)}</p> 
                </div>  
            </div>

            <div className="flex flex-col items-center gap-1 mx-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
                    <img onClick={() => previous()} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                    {playstatus 
                        ?<img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
                        :<img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" /> 
                    }
                    <img onClick={() => next()} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
                </div>

                <div className="flex items-center gap-5">
                    <p>{time.currenttime.minute}:{time.currenttime.second}</p>
                    <div ref={seekbg} onClick={seeksong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full">
                        <hr ref={seekbar} className="h-1 w-[0%] border-none bg-green-800 rounded-full" />
                    </div>
                    <p>{time.totaltime.minute}:{time.totaltime.second}</p>
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img src={assets.plays_icon} alt="" className="w-4" />
                <img src={assets.mic_icon} alt="" className="w-4" />
                <img src={assets.queue_icon} alt="" className="w-4" />
                <img src={assets.speaker_icon} alt="" className="w-4" />
                <img src={assets.volume_icon} alt="" className="w-4" />
                <div className="bg-slate-50 h-1 rounded w-20"></div>
                <img src={assets.mini_player_icon} alt="" className="w-4" />
                <img src={assets.zoom_icon} alt="" className="w-4" />
            </div>
        </div>
    )
}

export default Player;