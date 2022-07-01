import './App.css';
import { useState } from 'react';


import {Songs} from './Context'
import DataSongs from './data/songs.json'
import {Navbar, DetailSong, ListSongs, Playing} from './components/index'


function App() {

  const [song,setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) =>{
    const song = DataSongs.find(song => song.id === idSong)
    if(!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }

  return (
    <div className="App">
     <Songs.Provider value={{DataSongs, song, handleSetSong}}>
     <Navbar />
      <div className='grid grid-cols-3 bg-slate-800 h-screen-navbar-player overflow-hidden'>
        <DetailSong />
        <ListSongs />
      </div>
      <Playing />
     </Songs.Provider>
    </div>
  );
}

export default App;
