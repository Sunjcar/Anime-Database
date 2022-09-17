import {React, useState} from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [mangaList, setMangaList] = useState([])
  const [topManga, setTopManga] = useState([])
  const [search, setSearch] = useState('')


  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
