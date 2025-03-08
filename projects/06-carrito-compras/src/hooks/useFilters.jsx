import { useState } from "react"

export const useFilters = () => {
    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState('')

    console.log(minPrice, category);
    
    return {
        minPrice,
        setMinPrice,
        category,
        setCategory
    }
}