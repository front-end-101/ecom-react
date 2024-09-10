import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const ProductDetails = () => {
  const { productId } = useParams();

  const { state, dispatch } = useContext(CartContext);

  const { data, loading } = useFetch(
    `https://dummyjson.com/products/${productId}`
  );

  console.log(state);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.loading}>
          <h1>Loading....</h1>
        </div>
      )}

      {!loading && (
        <div className={styles.wrapper}>
          <div className={styles.product_img}>
            <img src={data.thumbnail} alt="" />
          </div>

          <div className={styles.product_details}>
            <h2 className={styles.brand}>{data.brand}</h2>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.description}>{data.description}</p>
            <h1 className={styles.price}>${data.price}</h1>
            <button
              className={styles.add_cart}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: data })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
