import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useSearch } from './hooks/useSearch';

function App() {
  const [ search, updateSearch ] = useSearch();
  const [ movies, getMovies ] = useMovies(search);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(search);
  }

  const handleChange = (event) => {
    updateSearch(event.target.value);
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="input-search" id="input-search" placeholder='Avengers, ET...'/>
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
