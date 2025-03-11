import { useFilters } from "../hooks/useFilters"

export const Filters = () => {
  const { filters, setFilters } = useFilters()
  
  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <label htmlFor="minPrice">Precio mínimo</label>
      <input value={filters.minPrice} id='minPrice' type='number' onChange={handleChangeMinPrice}/>
      <select value={filters.category} name='category' onChange={handleChangeCategory}>
        <option value="">Todas las categorías</option>
        <option value="men's clothing">Ropa de hombre</option>
        <option value='jewelery'>Joyería</option>
      </select>
    </section>
  )
}