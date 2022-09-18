import React from 'react'

function Sidebar({ topManga }, props) {
    return (
        <aside>
            <nav>
                <h3>Top Manga</h3>
                {topManga.map(manga => (
                    <a
                        href={manga.url}
                        target='_blank'
                        rel='noreferrer'
                        key={manga.mal_id}
                    >
                        {manga.title}
                        <figure>
                            <img
                                src={manga.images.jpg.small_image_url} alt='Manga' />
                        </figure>
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar