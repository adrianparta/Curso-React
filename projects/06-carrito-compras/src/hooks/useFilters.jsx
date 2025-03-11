import { useContext, useEffect, useState } from "react"
import products from '../products.json'
import { FiltersContext } from "../contexts/filters"

export const useFilters = () => {
    const { filters, setFilters } = useContext(FiltersContext) 
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
    
    return {
        filters, setFilters, filteredProducts
    }
}