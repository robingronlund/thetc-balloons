import React from 'react'
import tcLogo from '../../static/tc-logo.png'
import styles from './header.module.scss'
import { Link } from '@reach/router';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.image}>
        <img src={tcLogo} alt="" className={styles.image}/>
      </Link>

      <Link to="/cart" className={styles.cartLink}>
        <i className="material-icons">shopping_cart</i>
      </Link>
    </header>
  )
}
