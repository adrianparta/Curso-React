import products from './products.json'
import './App.css'
import { Product } from './components/Product'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { FiltersContext } from './contexts/filters'
import { Filters } from './components/Filters'

function App() {
  const { filters } = useContext(FiltersContext);
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const newFilteredProducts = [...products].filter(product => {
      return (
      product.price >= filters.minPrice &&
      (filters.category === '' || product.category === filters.category)
      )
    })

    setFilteredProducts(newFilteredProducts)

  }, [filters])
  
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
