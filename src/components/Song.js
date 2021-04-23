import React from 'react'

export const Song = ({lyric}) => {
        if(lyric.length === 0) return null;
    return (
        <>
            <h2>Letra Canción</h2>
            <p className="letra">{lyric}</p>
        </>
    )
}
