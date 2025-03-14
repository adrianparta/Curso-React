import './Cart.css'
import { useId } from "react"

export const Cart = () => {
    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>🛒</label>
            <input type="checkbox" id={cartCheckboxId} />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Iphone" />
                        <div>
                            <strong>Iphone</strong>
                            <strong>$1500</strong>
                        </div>

                        <footer>
                            <small>Qty: 1</small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>🧺</button>
            </aside>    
        </>
    )
}