import './Navbar.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = ({click}) => {

    /* Defino o estado usando o Hook (useSelector) do Redux */
    const cart = useSelector(state => state.cart);
    /* Destructuring no cart para pegar o elemento filho */
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to='/cart' className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                        Cart
                        <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburguer menu */}
            <div className="hamburguer__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
