import React from 'react'
import { Link } from '@reach/router'

import styles from './balloon-card.module.scss'
import '../../styles/components/card.scss'

export const BalloonsCard: React.FC = () => {

  return (
    <Link to="balloon/1">
      <div className={`${styles.card} card`}>
        <img src="" alt=""/>
        <h2>BLUE BALLOON</h2>
        <p>It's a balloon</p>
        <footer>
          <button className={`buttonPrimary ${styles.button}`}>Show</button>
        </footer>
      </div>
    </Link>
  )
}
