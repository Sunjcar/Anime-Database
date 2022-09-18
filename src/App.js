import { React, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  const [mangaList, setMangaList] = useState([])
  const [topManga, setTopManga] = useState([])
  const [search, setSearch] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [buttonText, setButtonText] = useState('Dark Mode')


  const getTopManga = async () => {
    const mangaAPI = await fetch (`https://api.jikan.moe/v4/top/manga`)
      .then(res => res.json())

      setTopManga(mangaAPI.data.slice(0,10))
  }

  useEffect(() => {
    getTopManga();
  }, [])

  const handleSearch = e => {
    e.preventDefault();
    fetchManga(search)
  }

  const fetchManga = async (query) => {
    const mangaAPI = await fetch (`https://api.jikan.moe/v4/manga?q=${query}&limit=12`)
      .then(res => res.json())

      setMangaList(mangaAPI.data)
  }

  const handleDarkMode = () => {
    setIsActive (active => !active)
    if(buttonText === 'Dark Mode'){
      setButtonText('Light Mode')
    } else {
      setButtonText('Dark Mode')
    }
  }

  return (
    <div className="App" style={{
      backgroundColor: isActive ? 'black' : 'white',
    }}>
      <div className='header'>
      <Header />
      <button onClick={handleDarkMode}> {buttonText} </button>
      </div>
      <div className='content-wrap' style={{
      backgroundColor: isActive ? 'black' : 'white',
    }}>
        <Sidebar
          topManga={topManga} />
        <Main
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
        mangaList={mangaList}
        />
      </div>
    </div>
  );
}

export default App;
