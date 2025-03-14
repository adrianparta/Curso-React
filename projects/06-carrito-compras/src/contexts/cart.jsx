import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productIndex = cart.findIndex(item => item.id === product.id)  
        if (productIndex === -1) {
            setCart(prevState => [...prevState, { ...product, qty: 1 }])
        } else {         
            const newCart = structuredClone(cart)
            newCart[productIndex].qty += 1
            setCart(newCart)
        }
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}