import React from "react";

import styles from "./cart-item.module.scss";
import "../../styles/components/card.scss";

interface Balloon {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  color: string;
  variant: string;
  price: number;
  availableSince: string;
  cursor: string;
  quantity?: number;
}

interface CartItemProps {
  node: Balloon;
  removeProduct: (event: string) => void;
  quantity?: number;
  cost?: number;
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { node, cost, quantity, removeProduct } = props;

  return (
    <div className={`${styles.card} card`}>
      <img
        src={`https://balloons.thetc.se/${node.imageUrl}`}
        alt={`${node.color} balloon`}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3>{node.name}</h3>
        <p>{node.description}</p>
      </div>
      <div className={styles.priceWrapper}>
        <label>
          Quantity: <span>{quantity}</span>
        </label>
        <label>
          Price: <span>{cost} SEK</span>
        </label>
      </div>
      <i
        className={`material-icons ${styles.remove}`}
        onClick={() => removeProduct(node.id)}
      >
        remove_circle
      </i>
    </div>
  );
};
