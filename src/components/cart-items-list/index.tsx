import React from 'react'
import { CartItem } from '../cart-item'

import styles from './cart-items-list.module.scss'

interface Balloon {
  id: string
  name: string
  imageUrl: string
  description: string
  color: string
  variant: string
  price: number
  availableSince: string
  cursor: string
  quantity?: number
}

interface BallonDetails {
  node: Balloon
  quantity?: number
  cost?: number
}

interface CartItemsListProps {
  balloons: BallonDetails[]
  removeProduct: (event: string) => void
}

export const CartItemsList: React.FC<CartItemsListProps> = (props) => {
  const { balloons, removeProduct  } = props

  return (
    <div className={styles.wrapper}>
       { balloons.map((balloon, i) =>
          <CartItem key={i} node={balloon.node} cost={balloon.cost} quantity={balloon.quantity} removeProduct={(id) => removeProduct(id)}/>
        )}
    </div>
  )
}
