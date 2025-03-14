import { useContext } from "react"
import { CartContext } from "../contexts/cart"

export const useCart = () => {
    const cart = useContext(CartContext)

    return cart
}