import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const Navbar = () => {
  const {state} = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.logo}>Shopper</h1>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cart">
            Cart <span>{state?.cart.length}</span>
          </Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
