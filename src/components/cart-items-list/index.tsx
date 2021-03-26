import React from 'react'
import { CartItem } from '../cart-item'

import styles from './cart-items-list.module.scss'

interface Cart {
  id: number
  product: string
  price: number
}

interface CartItemsListProps {
  products: Cart[]
}

export const CartItemsList: React.FC<CartItemsListProps> = (props) => {
  const { products } = props

  return (
    <div className={styles.wrapper}>
       { products.map((product) =>
          <CartItem key={product.id} product={product.product} price={product.price}/>
        )}
    </div>
  )
}
