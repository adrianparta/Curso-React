import products from './products.json'
import './App.css'
import { Product } from './components/Product'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const newFilteredProducts = [...products].filter(product => {
      return (
      product.price >= minPrice &&
      category === '' || product.category === category
      )
    })

    setFilteredProducts(newFilteredProducts)

  }, [minPrice, category])
  

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }
  return (
    <div className="app">
      <header className='header'>
        <h1>Carrito de compras</h1>
        <section className='filters'>
          <label htmlFor="minPrice">Precio mínimo</label>
          <input id='minPrice' type='number' onChange={handleChangeMinPrice}/>
          <select name='category' onChange={handleChangeCategory}>
            <option value="">Todas las categorías</option>
            <option value="men's clothing">Ropa de hombre</option>
            <option value='jewelery'>Joyería</option>
          </select>
        </section>
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
