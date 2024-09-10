import { useContext } from "react";
import styles from "./CartItem.module.css";
import { CartContext } from "../../store/CartContext";

const CartItem = ({ cartData }) => {
    const {dispatch} = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      <div>
        <img
          width={80}
          height={80}
          style={{ objectFit: "cover" }}
          src={cartData.thumbnail}
          alt={cartData.title}
        />
      </div>
      <div>
        <h2>{cartData?.brand}</h2>
        <h3>{cartData?.price}</h3>
      </div>
      <div >
        <button onClick={() => dispatch({type: 'ADD_QUANTITY', payload: cartData.id})}>+</button>
        <p>{cartData.quantity}</p>
        <button onClick={() => dispatch({type: 'REMOVE_QUANTITY', payload: cartData.id})}>-</button>
      </div>
      <button onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: cartData?.id})}>Remove</button>
    </div>
  );
};

export default CartItem;
