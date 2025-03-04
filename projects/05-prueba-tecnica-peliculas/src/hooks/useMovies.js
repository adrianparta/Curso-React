import { useCallback, useMemo, useRef, useState } from "react";

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([]);
    const previusSearch = useRef(search)

    const getMovies = useCallback(({ search }) => {
        if(previusSearch.current === search) return
        previusSearch.current = search
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
    }, [])

    const sortedMovies = useMemo(() => {
        console.log(sort);
                
        return sort 
        ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title)) 
        : movies
    }, [movies, sort])

    return ({ movies: sortedMovies, getMovies })
}