import React from 'react'
import { Header } from '../header/header'

import styles from './app-layout.module.scss'


export const AppLayout: React.FC = ({children}) => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <main className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </main>
    </div>
  )
}
