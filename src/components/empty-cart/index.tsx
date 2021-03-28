import React from "react";
import { Link } from "@reach/router";

import styles from "./empty-cart.module.scss";

export const EmptyCart: React.FC = () => {
  return (
    <div className={`${styles.card} card`}>
      <i className="material-icons">remove_shopping_cart</i>
      <label>Your cart is empty</label>
      <Link to="/" className={`buttonPrimary ${styles.button}`}>
        Browse balloons
      </Link>
    </div>
  );
};
