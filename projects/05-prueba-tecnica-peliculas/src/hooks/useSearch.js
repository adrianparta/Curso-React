import { useState } from "react";

export function useSearch() {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search)
    }
    
    return ({ search, updateSearch })
}