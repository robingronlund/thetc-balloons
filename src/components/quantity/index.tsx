import React, { ChangeEvent, useState } from 'react'

import styles from './quantity.module.scss'

export const Quantity: React.FC = () => {
  const [state, setState] = useState(1)

  const increment = () => {
    setState(state +1)
  }

  const decrement = () => {
    setState(state -1)
  }

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value) || 1

    if (value > 10) {
      setState(10)
    } else {
      setState(value)
    }
  }

  return (
    <div className={styles.quantityOuterWrapper}>
      <label>Quantity</label>
      <div className={styles.quantityInputWrapper}>
        <button type="button" disabled={state === 1 } onClick={decrement} className={styles.quantitySpin}>-</button>
        <input type="number" max="10" min="1" value={state} onChange={(e) => change(e)} className={styles.quantityInput} />
        <button type="button" disabled={state === 10 } onClick={increment} className={styles.quantitySpin}>+</button>
      </div>
    </div>
  )
}
