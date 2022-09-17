import { React, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const [mangaList, setMangaList] = useState([])
  const [topManga, setTopManga] = useState([])
  const [search, setSearch] = useState('')


  const getTopManga = async () => {
    const mangaAPI = await fetch (`https://api.jikan.moe/v4/top/manga`)
      .then(res => res.json())

      setTopManga(mangaAPI.data.slice(0,5))
  }

  useEffect(() => {
    getTopManga();
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='content-wrap'>
        <Sidebar
          topManga={topManga} />
      </div>
    </div>
  );
}

export default App;
