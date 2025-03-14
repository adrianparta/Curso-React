import './App.css'
import { Product } from './components/Product'
import { Filters } from './components/Filters'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'

function App() {
  const { filteredProducts } = useFilters()

  return (
    <div className="app">
      <header className='header'>
        <h1>Carrito de compras</h1>
        <Filters />
      </header>
      <Cart />
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
