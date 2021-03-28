import { Link } from '@reach/router'
import React, { ReactNode } from 'react'
import { Header } from '../header'

import styles from './app-layout.module.scss'

interface props {
  children: ReactNode
  title?: string
  displayNav?: boolean
  navTitle?: string
}

export const AppLayout: React.FC<props> = ({children, title, displayNav, navTitle}) => {
  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      <main className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          {displayNav ?
            <Link to="/" className={styles.goBackLink}>
            <i className={`material-icons `}>keyboard_arrow_left</i>
            {navTitle}
          </Link>:
          <div></div>
          }
          <h1>{title}</h1>
          {children}
        </div>
      </main>
    </div>
  )
}
