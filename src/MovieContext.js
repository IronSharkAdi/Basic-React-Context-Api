import React, { createContext, useState } from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name : "365 Days",
            price : 10
        },
        {
            name : "Fifty Shades",
            price : 5
        },
        {
            name : "After",
            price : 8
        }
    ])
    return(
        <MovieContext.Provider value={[movies , setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
