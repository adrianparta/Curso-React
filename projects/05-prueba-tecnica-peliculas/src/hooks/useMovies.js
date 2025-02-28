import {useState } from "react";

export const useMovies = () => {
    const [movies, setMovies] = useState([]);
    
    const getMovies = (search) => {
        if(search === '') return
        fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
        .then(res => res.json())
        .then(data => {
            if(data.Response === 'False') {
                setMovies([])
                return 
            }
            const movies = data.Search
            setMovies(movies)
        })
    }

    return ([ movies, getMovies ])
}