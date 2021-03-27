import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { CartItemsList } from '../../components/cart-items-list';
import { AppLayout } from '../../layout/app-layout';

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
}

export const CartPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setState] = useState<Balloon[]>(JSON.parse(localStorage.getItem('cart') || '[]'))

  const removeProduct = (id: string) => {
    const balloons = state.filter((balloon) => balloon.id !== id)
    setState(balloons)
    localStorage.setItem('cart', JSON.stringify(balloons))
  }

  // const removeProduct = (id: number) => {
  //   console.log("removing product")
  //   let cart: Cart[] = JSON.parse(localStorage.getItem('cart')!)
  //   if (!cart) {
  //     alert("Something weird happened, can't locate the balloon")
  //   } else {
  //     const prod = cart.find((cart_product) =>
  //       cart_product?.id === id
  //     )

  //     if (!prod) {
  //       return console.log(`Unable to find index of ${product}`)
  //     }

  //     let index = cart.indexOf(prod)

  //     cart.splice(index, 1)
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //   }
  // }

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
