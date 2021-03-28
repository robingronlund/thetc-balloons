import React from "react";
import { AppLayout } from "../../layout/app-layout";

import styles from "./error-page.module.scss";
import balloonImage from "../../static/Balloon-icon.png";

export const ErrorPage: React.FC = () => {
  const errorTitle = "Oh no! It looks like we got lost in the void";

  return (
    <AppLayout title={errorTitle}>
      <div className={styles.wrapper}>
        <p>Click the balloon and we'll get you back to safety :)</p>
        <img
          src={balloonImage}
          alt=""
          className={styles.balloon}
          onClick={() => window.location.reload()}
        />
      </div>
    </AppLayout>
  );
};
