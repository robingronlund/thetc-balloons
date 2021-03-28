import React from "react";
import { Link } from "@reach/router";
import { BalloonEdge } from "../../queries/autogenerate/schemas";

import styles from "./balloon-item.module.scss";
import "../../styles/components/card.scss";


export const BalloonItem: React.FC<BalloonEdge> = (props) => {
  const { node } = props;

  return (
    <Link to={`balloons/${node.id}`}>
      <div className={`${styles.card} card`}>
        <img
          src={`https://balloons.thetc.se/${node.imageUrl}`}
          alt={`${node.color} balloon`}
          className={styles.image}
        />
        <h2>{node.name}</h2>
        <p>From {node.price} SEK</p>
        <footer>
          <button className={`buttonPrimary ${styles.button}`}>Show</button>
        </footer>
      </div>
    </Link>
  );
};
