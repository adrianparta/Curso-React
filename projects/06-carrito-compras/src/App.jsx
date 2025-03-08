import products from './products.json'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className='header'>
        <h1>Carrito de compras</h1>
        <strong>filtros</strong>
      </header>
      <main>
        <ul className='products'>
          {
            products.map(product => {
              return (
                <li key={product.id} className='product'>
                  <img src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p>{product.price}</p>
                  <button>Agregar al carrito</button>
                </li>
              )
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App
