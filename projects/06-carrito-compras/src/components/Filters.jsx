import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export const Filters = () => {
  const { filters, setFilters } = useFilters()
  const inputMinPriceID = useId()
  const inputCategoryID = useId()

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
      <label htmlFor={inputMinPriceID}>Precio mínimo</label>
      <input value={filters.minPrice} id={inputMinPriceID} type='number' onChange={handleChangeMinPrice}/>
      <select id={inputCategoryID} value={filters.category} name='category' onChange={handleChangeCategory}>
        <option value="">Todas las categorías</option>
        <option value="men's clothing">Ropa de hombre</option>
        <option value='jewelery'>Joyería</option>
      </select>
    </section>
  )
}