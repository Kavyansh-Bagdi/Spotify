import React,{useContext} from 'react';
import Sidebar from './components/sidebar';
import Player from './components/player';
import Display from './components/display';
import { PlayerContext } from './context/playercontext';

function App() {
  const {audioRef,track,playstatus,setplaystatus,pause,play} = useContext(PlayerContext);
  return (
    <div className='bg-black h-screen w-screen'>  
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div>
  )
}

export default App
