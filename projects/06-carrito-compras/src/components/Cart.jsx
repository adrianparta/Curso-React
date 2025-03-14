import { useCart } from '../hooks/useCart'
import './Cart.css'
import { useId } from "react"

export const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    function handleClick () {
        clearCart()
    }
    
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>🛒</label>
            <input type="checkbox" id={cartCheckboxId} hidden/>
            <aside className="cart">
                <ul>
                    {                        
                        cart.map(product => {
                            return(
                                <li key={product.id}>
                                    <img src={product.image} alt={product.title} />
                                    <div>
                                        <strong>{product.title}</strong>
                                        <strong>${product.price}</strong>
                                    </div>
                                    <footer>
                                        <small>Qty: {product.qty}</small>
                                        <button onClick={() => addToCart(product)}>+</button>
                                    </footer>
                                </li>
                            )
                        })
                    }
                </ul>

                <button onClick={handleClick}>🧺</button>
            </aside>    
        </>
    )
}