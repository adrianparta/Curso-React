import { useFilters } from "../hooks/useFilters"

export const Filters = () => {
  const { setMinPrice, setCategory } = useFilters()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
  }

  return (
    <section className='filters'>
      <label htmlFor="minPrice">Precio mínimo</label>
      <input id='minPrice' type='number' onChange={handleChangeMinPrice}/>
      <select name='category' onChange={handleChangeCategory}>
        <option value="">Todas las categorías</option>
        <option value="men's clothing">Ropa de hombre</option>
        <option value='jewelery'>Joyería</option>
      </select>
    </section>
  )
}