import { createContext } from "react";

export const cartContext = createContext()

export const carProvider = ({ children }) => {
    return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}