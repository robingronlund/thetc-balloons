import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';
import { CartItem } from '../../components/cart-item';
import { CartItemsList } from '../../components/cart-items-list';
import { AppLayout } from '../../layout/app-layout';

import styles from './cart-page.module.scss'
import '../../styles/components/button.scss'

interface Cart {
  id: number
  product: string
  price: number
}

export const CartPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setState] = useState<Cart[]>()

  useEffect(() => {
    let cart: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]')

    if (!cart) return;

    setState(cart)
  }, [setState])

  if (!state) return <div>No cart</div>

  return (
    <AppLayout>
        <CartItemsList products={state} />
        <div className={styles.actions}>
          <button className={`buttonPrimary ${styles.button}`}>Place order</button>
        </div>
    </AppLayout>
  )
}
