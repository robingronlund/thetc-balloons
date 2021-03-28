import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { CartItemsList } from '../../components/cart-items-list';
import { AppLayout } from '../../layout/app-layout';
import * as api from '../../data/balloons.json'

import styles from './cart-page.module.scss'
import '../../styles/components/button.scss'
import { EmptyCart } from '../../components/empty-cart';

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

export const CartPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setState] = useState<Balloon[]>(JSON.parse(localStorage.getItem('cart') || '[]'))

  const removeProduct = (id: string) => {
    const balloons = state.filter((balloon) => balloon.id !== id)
    setState(balloons)
    localStorage.setItem('cart', JSON.stringify(balloons))
  }

  const placeOrder = () => {
    alert("Thank you for you order! Your balloons will be delivered shortly")
  }

  return (
    <AppLayout title="Checkout">
      {state.length > 0
      ?
      <div>
          <CartItemsList balloons={state} removeProduct={(id) => removeProduct(id)}/>
          <div className={styles.actions}>
            <button className={`buttonPrimary ${styles.button}`} onClick={placeOrder}>Place order</button>
          </div>
      </div>
      :
      <EmptyCart></EmptyCart>
    }
    </AppLayout>
  )
}
