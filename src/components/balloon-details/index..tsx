import React, { ChangeEvent, useEffect, useState } from "react";
import { Balloon } from "../../queries/autogenerate/schemas";

import styles from "./balloon-details.module.scss";

interface BallonDetails {
  node: Balloon;
  quantity?: number;
  cost?: number;
}

export const BalloonDetails: React.FC<Balloon> = (balloon) => {
  const [qty, setQty] = useState(1);
  const [cost, setCost] = useState(balloon.price);

  const addToCart = () => {
    const products: BallonDetails[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingpProduct: BallonDetails = products.find((product) => {
      return product.node.id === balloon.id;
    })!;

    if (existingpProduct) {
      existingpProduct.quantity = existingpProduct.quantity
        ? existingpProduct.quantity + qty
        : qty;
      existingpProduct.cost = existingpProduct.cost
        ? existingpProduct.cost + cost
        : cost;
    } else {
      products.push({ quantity: qty, node: balloon, cost: cost });
    }

    localStorage.setItem("cart", JSON.stringify(products));
    alert("Great! Balloon(s) have been added to the cart");
  };

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
    setCost(balloon.price * qty);

    return () => {
      setCost(balloon.price);
    };
  }, [qty, balloon.price]);

  return (
    <div className={styles.detailsMain}>
      <img
        src={`https://balloons.thetc.se/${balloon.imageUrl}`}
        alt={`${balloon.color} balloon`}
        className={styles.detailsImage}
      />
      <div className={styles.detailsDescription}>
        <div className={styles.detailsInfo}>
          <ul>
            <li>{balloon.description}</li>
            <li>Color: {balloon.color}</li>
            <li>Variant: {balloon.variant}</li>
            <li>
              Available since:{" "}
              {new Date(balloon.availableSince).toLocaleDateString()}
            </li>
          </ul>
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
          <div className={styles.checkoutWrapper}>
            <button
              className={`buttonPrimary ${styles.button}`}
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
