import './CartScreen.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Components
import CartItem from '../components/CartItem';

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    }

    return (
        <div className="cartscreen">
            <div clasName="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem 
                    key={item.product}
                    item={item} 
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeHandler}
                    />
                ))}
            </div>
            <div className="cartscreen__right">
                {cartItems.length !== 0 ? (
                    <>
                    <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed()}</p>
                </div>
                <div>
                    <button>Proceed TO Checkout</button>
                </div>
                </>
                ) : null}
                
            </div>
        </div>
    )
}

export default CartScreen
