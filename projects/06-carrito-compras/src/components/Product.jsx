import { useCart } from "../hooks/useCart"

export function Product ({ product }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const productInCart = cart.some(item => item.id === product.id)

    return (
    <li key={product.id} className='product'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button onClick={() => productInCart ? removeFromCart(product) : addToCart(product)}>{productInCart ? 'Borrar del carrito' : 'Agregar al carrito'}</button>
    </li>
    )
}