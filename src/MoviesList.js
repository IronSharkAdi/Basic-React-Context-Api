import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

function MoviesList() {
    const [movies , setMovies] = useContext(MovieContext)
    
    return (
        <div>
            {movies.map((movie)=>(
                <div>
                    <h3>{movie.name}</h3>
                    <h3>{movie.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default MoviesList
