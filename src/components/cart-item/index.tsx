import React from 'react'
import { Quantity } from '../quantity'

import styles from './cart-item.module.scss'
import '../../styles/components/card.scss'

interface CartProps {
  product: string
  price: number
}

export const CartItem: React.FC<CartProps> = (props) => {
  const { product, price} = props

  return (
    <div className={`${styles.card} card`}>
      <div className={styles.image}></div>
      <div className={styles.details}>{product}</div>
      <Quantity />
      <div className={styles.price}>{price}</div>
      <i className={`material-icons ${styles.remove}`} >remove_circle</i>
    </div>
  )
}
