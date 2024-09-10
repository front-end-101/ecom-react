import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const navigate = useNavigate();

  const { state } = useContext(CartContext);
  const cart = state.cart;
  const total = cart?.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className={styles.cart}>
      <button onClick={() => navigate(-1)}>Back</button>
      {cart.length > 0 ? (
        <div className={styles.wrapper}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem key={item} cartData={item} />
            ))}
          </div>
          <div className={styles.total}>
            <h1>Cart Summary</h1>
            <div>
              <ul>
                {cart?.map((item) => {
                  return (
                    <li key={item.id}>
                      <span>
                        {item?.brand} 
                      </span>
                      <span className={styles.itemPrice}>{item?.quantity} x {item?.price} $</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <h2>Total : $ {Math.floor(total)}</h2>
            <button className={styles.payment}>Proceed to payment</button>
          </div>
        </div>
      ) : (
        <h2>Cart Is Empty</h2>
      )}
    </div>
  );
};

export default Cart;
