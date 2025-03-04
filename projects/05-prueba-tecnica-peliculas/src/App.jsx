import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useSearch } from './hooks/useSearch';
import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

function App() {
  const [ sort, setSort ] = useState(false);
  const { search, updateSearch } = useSearch();
  const { movies, getMovies } = useMovies({ search, sort });
  
  const debouncedGetMovies = useCallback(debounce(({ search }) => {
    getMovies({ search });
  }, 300), [getMovies]);


  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  }

  const handleSort = () => {
    const newSort = sort;
    setSort(!newSort);
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch);
    debouncedGetMovies({ search: newSearch });
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="input-search" id="input-search" placeholder='Avengers, ET...'/>
          <input type="checkbox" name="sort" id="sort" onChange={handleSort} checked={sort}/>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  ) 
}

export default App
