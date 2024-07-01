import React, { useContext } from "react";
import { PlayerContext } from "../context/playercontext";

export default function Songcard(props){
    const {playwithID} = useContext(PlayerContext);
    return(
        <div onClick={() => playwithID(props.id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img src={props.image} className="rounded" alt="" />
            <p className="font-bold mt-2 mb-1 text-white">{props.name}</p>
        </div>
    )
}