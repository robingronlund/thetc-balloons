import React, { useState } from 'react'

import styles from './balloon-card.module.scss'

export const BalloonsCard: React.FC = () => {

  return (
    <a href="">
      <div className={styles.card}>
        <img src="" alt=""/>
        <h2>BLUE BALLOON</h2>
        <p>It's a balloon</p>
        <footer>
          <button>Show</button>
        </footer>
      </div>
    </a>
  )
}
