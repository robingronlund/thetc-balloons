import React from 'react'
import { BalloonsCard } from '../balloon-card'

import styles from './balloons-list.module.scss'

export const BalloonsList: React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <BalloonsCard />
        </li>
        <li className={styles.list__item}>
          <BalloonsCard />
        </li>
        <li className={styles.list__item}>
          <BalloonsCard />
        </li>
        <li className={styles.list__item}>
          <BalloonsCard />
        </li>
        <li className={styles.list__item}>
          <BalloonsCard />
        </li>
      </ul>
    </div>
  )
}
