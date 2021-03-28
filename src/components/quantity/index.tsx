import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./quantity.module.scss";

interface props {
  price: number;
}

export const Quantity: React.FC<props> = ({ price }) => {
  const [qty, setQty] = useState(1);
  const [cost, setCost] = useState(price);

  const increment = () => {
    setQty(qty + 1);
  };

  const decrement = () => {
    setQty(qty - 1);
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value) || 1;

    if (value > 10) {
      setQty(10);
    } else {
      setQty(value);
    }
  };

  useEffect(() => {
    setCost(price * qty);

    return () => {
      setCost(price);
    };
  }, [qty, price]);

  return (
    <div className={styles.priceWrapper}>
      <div className={styles.outerWrapper}>
        <label>Quantity</label>
        <div className={styles.inputWrapper}>
          <button
            type="button"
            disabled={qty === 1}
            onClick={decrement}
            className={styles.spin}
          >
            -
          </button>
          <input
            type="number"
            max="10"
            min="1"
            value={qty}
            onChange={(e) => change(e)}
            className={styles.input}
          />
          <button
            type="button"
            disabled={qty === 10}
            onClick={increment}
            className={styles.spin}
          >
            +
          </button>
        </div>
      </div>
      <label>{cost} SEK</label>
    </div>
  );
};
