import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FiltersContext = createContext()

export function FilterProvider({ children }) {
    const [ filters, setFilters ] = useState({
        minPrice: 0,
        category: ''
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            { children }
        </FiltersContext.Provider>
    )
}