import './App.css'
import { Product } from './components/Product'
import { Filters } from './components/Filters'
import { useFilters } from './hooks/useFilters'

function App() {
  const { filteredProducts } = useFilters()

  return (
    <div className="app">
      <header className='header'>
        <h1>Carrito de compras</h1>
        <Filters />
      </header>
      <main>
        <ul className='products'>
          {
            filteredProducts.map(product => {              
              return (
                <Product key={product.id} product={ product } />
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App
