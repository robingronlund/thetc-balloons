import React, { ChangeEvent, useState } from 'react'
import { RouteComponentProps } from "@reach/router";
import { AppLayout } from '../../layout/app-layout';

import styles from './balloons-details-page.module.scss'
import { Quantity } from '../../components/quantity';

interface Cart {
  id: number
  product: string
  price: number
}

export const BalloonDetailsPage: React.FC<RouteComponentProps> = ({path}) => {
  const addToCart = () => {
    let cart: Cart[] = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart.length <= 0) {
      localStorage.setItem('cart', JSON.stringify([{id: 1, product: "Blue balloon", price: 1200}]))
    } else {
      cart.push({id: 2, product: "red balloon", price: 12334})
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  return(
    <AppLayout>
      <div className={styles.detailsMain}>
        <img src="" alt="" className={styles.detailsImage}/>

        <div className={styles.detailsDescription}>
          <h2 className={styles.detailsTitle}>Big Ballon title</h2>
          <div className={styles.detailsInfo}>
            <ul>
              <li>Description</li>
              <li>color</li>
              <li>variant</li>
              <li>available since</li>
              <li>price</li>
            </ul>
            <Quantity />
            <button className={`buttonPrimary ${styles.button}`} onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
