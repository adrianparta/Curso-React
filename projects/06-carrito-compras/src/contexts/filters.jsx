import { useState } from "react";
import { FiltersContext } from "./filterContext";

export function FilterProvider({ children }) {
    const { filters, setFilters } = useState({
        minPrice: 0,
        category: ''
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            { children }
        </FiltersContext.Provider>
    )
}