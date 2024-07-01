import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate(`/album/${props.id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img src={props.image} className="rounded" alt="" />
            <p className="font-bold mt-2 mb-1 text-white">{props.name}</p>
            <p className="text-slate-200 text-sm">{props.desc}</p>
        </div>
    )
}