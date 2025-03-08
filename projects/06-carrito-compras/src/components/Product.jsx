export function Product ({ product }) {
    return (
    <li key={product.id} className='product'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button>Agregar al carrito</button>
    </li>
    )
}