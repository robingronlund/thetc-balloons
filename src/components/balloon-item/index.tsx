import React from 'react'
import { Link } from '@reach/router'

import styles from './balloon-item.module.scss'
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
}

export const BalloonItem: React.FC<props> = (props) => {
  const { balloon } = props

  return (
    <Link to={`balloons/${balloon.id}`}>
      <div className={`${styles.card} card`}>
        <img src={`https://balloons.thetc.se/${balloon.imageUrl}`} alt={`${balloon.color} balloon`} className={styles.image}/>
        <h2>{balloon.name}</h2>
        <p>From {balloon.price} SEK</p>
        <footer>
          <button className={`buttonPrimary ${styles.button}`}>Show</button>
        </footer>
      </div>
    </Link>
  )
}
