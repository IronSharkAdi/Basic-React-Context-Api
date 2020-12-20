import React, { useContext, useState } from 'react'
import  { MovieContext } from './MovieContext'

function AddMovie() {
    const [movies , setMovies] = useContext(MovieContext)
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMovies(prevMovies =>[...prevMovies , {name : name , price : price}])
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="name"onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="price" onChange={(e) => setPrice(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie
