import React from 'react'

import styles from './cart-item.module.scss'
import '../../styles/components/card.scss'

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

interface props {
  balloon: Balloon
  removeProduct: (event: string) => void
}

export const CartItem: React.FC<props> = (props) => {
  const { balloon, removeProduct } = props

  return (
    <div className={`${styles.card} card`}>
      <img src={`https://balloons.thetc.se/${balloon.imageUrl}`} alt={`${balloon.color} balloon`} className={styles.image}/>
      <div>
        <h3>{balloon.name}</h3>
        <div className={styles.details}>{balloon.description}</div>
      </div>

      <label className={styles.price}>{balloon.price} SEK</label>
      <i className={`material-icons ${styles.remove}`} onClick={() => removeProduct(balloon.id)} >remove_circle</i>
    </div>
  )
}
