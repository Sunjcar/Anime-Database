import React from 'react'
import MangaCard from './MangaCard'

function Main(props) {
    return (
        <main>
            <div className='main-head'>
                <form className='search-box' onSubmit={props.handleSearch}>
                    <input
                        type='search'
                        placeholder='Search for an manga...'
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)} />
                </form>
            </div>
            <div className='manga-list'>
                {props.mangaList.map(manga => (
                    <MangaCard
                        manga={manga}
                        key={manga.mal_id} />
                ))}
            </div>
        </main>
    )
}

export default Main