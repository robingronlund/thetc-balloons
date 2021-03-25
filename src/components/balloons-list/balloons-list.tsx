import React from 'react'
import { BalloonsCard } from '../balloon-card/balloon-card'

import styles from './balloons-list.module.scss'

export const BalloonsList: React.FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <BalloonsCard />
    </div>
  )
}
