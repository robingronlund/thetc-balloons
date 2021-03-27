import React from 'react'
import { BalloonItem } from '../balloon-item'

import styles from './balloon-items-list.module.scss'

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
  balloons: Balloon[]
}

export const BalloonItemsList: React.FC<props> = (props) => {
  const { balloons } = props

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {balloons.map((balloon: Balloon) =>
          <li className={styles.item} key={balloon.cursor}>
            <BalloonItem balloon={balloon}/>
          </li>
        )}
      </ul>
    </div>
  )
}
