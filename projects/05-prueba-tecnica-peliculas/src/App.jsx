import { useState } from 'react';
import './App.css'
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';

function App() {
  const [search, setSearch] = useState('');
  const [ movies, getMovies ] = useMovies(search);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(search);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
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
