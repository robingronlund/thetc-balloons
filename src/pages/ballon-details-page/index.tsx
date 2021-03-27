import React from 'react'
import { RouteComponentProps, useParams } from "@reach/router";
import { AppLayout } from '../../layout/app-layout';

import { Quantity } from '../../components/quantity';
import * as api from '../../data/balloons.json'

import styles from './balloons-details-page.module.scss'

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

export const BalloonDetailsPage: React.FC<RouteComponentProps> = (props) => {
  const test = useParams()
  const balloon = api.balloons.find((balloon) => balloon.id === test.id)!

  const addToCart = () => {
    let cart: Balloon[] = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart.length <= 0) {
      cart.push(balloon)
    } else {
      cart.push(balloon)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return(
    <AppLayout title={balloon.name}>
      <div className={styles.detailsMain}>
        <img src={`https://balloons.thetc.se/${balloon.imageUrl}`} alt={`${balloon.color} balloon`} className={styles.detailsImage}/>
        <div className={styles.detailsDescription}>

          <div className={styles.detailsInfo}>
            <ul>
              <li>{balloon.description}</li>
              <li>Color: {balloon.color}</li>
              <li>Variant: {balloon.variant}</li>
              <li>Available since: {new Date(balloon.availableSince).toLocaleDateString()}</li>
            </ul>
            <Quantity price={balloon.price}/>
            <div className={styles.checkoutWrapper}>
              <button className={`buttonPrimary ${styles.button}`} onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
