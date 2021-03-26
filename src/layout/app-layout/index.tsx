import React from 'react'
import { Header } from '../header'

import styles from './app-layout.module.scss'

export const AppLayout: React.FC = ({children}) => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <main className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <h1>Big Title</h1>
          {children}
        </div>
      </main>
    </div>
  )
}
