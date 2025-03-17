import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    
    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}