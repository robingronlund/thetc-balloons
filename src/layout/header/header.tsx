import React from 'react'
import balloonIcon from '../../static/balloon-icon.png';
import tcLogo from '../../static/tc-logo.png'
import shoppingCart from '../../static/shopping-cart.png';
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="" className={styles.link}>
        <img src={tcLogo} alt="" className={styles.image}/>
      </a>
      <a href="" className={styles.cartLink}>
        <i className="material-icons">shopping_cart</i>
      </a>
    </header>
  )
}
