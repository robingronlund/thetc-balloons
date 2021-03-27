import React, { ReactNode } from 'react'
import { Header } from '../header'

import styles from './app-layout.module.scss'

interface props {
  children: ReactNode
  title?: string
}

export const AppLayout: React.FC<props> = ({children, title}) => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <main className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <h1>{title}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}
