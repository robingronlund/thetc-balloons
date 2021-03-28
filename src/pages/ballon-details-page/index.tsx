import React, { ChangeEvent, useEffect, useState } from 'react'
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
  quantity?: number
}

export const BalloonDetailsPage: React.FC<RouteComponentProps> = (props) => {
  const test = useParams()
  const balloon: Balloon = api.balloons.find((balloon) => balloon.id === test.id)!
  const [qty, setQty] = useState(1)
  const [cost, setCost] = useState(balloon.price)

  const addToCart = () => {
    const products: Balloon[] = JSON.parse(localStorage.getItem('cart') || "[]")

    const hello: Balloon = products.find((product) => {
      return product.id === balloon.id
    })!

    if (hello) {
      hello.quantity = hello.quantity ? hello.quantity + qty : qty
      hello.price = hello.price + cost
    } else {
      balloon.quantity = qty
      balloon.price = cost
      products.push(balloon)
    }

    localStorage.setItem('cart', JSON.stringify(products))
    alert("Great! Balloon(s) have been added to the cart")
  }

  const increment = () => {
    setQty(qty+1)
  }

  const decrement = () => {
    setQty(qty-1)
  }

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value) || 1

    if (value > 10) {
      setQty(10)
    } else {
      setQty(value)
    }
  }

  useEffect(() => {
    setCost(balloon.price * qty)

    return () => {
      setCost(balloon.price)
    }
  }, [qty, balloon.price])

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
            <div className={styles.priceWrapper}>
              <div className={styles.outerWrapper}>
                <label>Quantity</label>
                <div className={styles.inputWrapper}>
                  <button type="button" disabled={qty === 1 } onClick={decrement} className={styles.spin}>-</button>
                  <input type="number" max="10" min="1" value={qty} onChange={(e) => change(e)} className={styles.input} />
                  <button type="button" disabled={qty === 10 } onClick={increment} className={styles.spin}>+</button>
                </div>
              </div>
              <label>{cost} SEK</label>
            </div>
            <div className={styles.checkoutWrapper}>
              <button className={`buttonPrimary ${styles.button}`} onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
