import React from 'react'
import styles from './ProductCard.module.css';

export const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        <img className={styles.img} src={product.thumbnail} alt="" />
        <h3>{product.brand}</h3>
        <h4 className={styles.title}>{product.title.substring(0,20)}</h4>
        <h2 className={styles.price}>$ {product.price}</h2>
    </div>
  )
}
