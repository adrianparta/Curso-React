const ListOfMovies = ({ movies }) => {
    return (
        <ul className='movies-list'>
            {
            movies.length > 0 && movies.map( movie => (
            <li className='movie' key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title}/>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
            </li>
            ))
            }
        </ul>
    )
}

const NoMovies = () => {
    return (
        <p>No se encontraron películas</p>
    )
}

export function Movies({movies}){
    const hasMovies = movies.length > 0

    return(
        hasMovies ? <ListOfMovies movies={movies}/> : <NoMovies/>
    )
}