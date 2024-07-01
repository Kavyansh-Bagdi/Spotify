import React from "react";
import { albumsData,songsData } from "../assets/assets/assets";
import NavBar from "./navbar";
import Card from "./albumitem";
import Songcard from "./songitem";
export default function Home(){
    return(
        <>
            <NavBar/>

            <div className="mb-4 text-white">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item,index) => <Card key={index} id={item.id} image={item.image} name={item.name} desc={item.desc}/>)}
                </div>
            </div>

            <div className="mb-4 text-white">
                <h1 className="my-5 font-bold text-2xl">Today Biggest Hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,index) => <Songcard key={index} id={item.id} image={item.image} name={item.name}/>)}
                </div>
            </div>
        </>
    )
}