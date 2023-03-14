import React from "react";
import styles from "./styles/cardsnackbar.module.scss";
import { svgsnackbar } from "../../utils/globalVariables";

const CardSnackBar = () => {
  return (
    <div className={styles.SnackBar}>
      <div className={styles.Snack}>
        <h1>SNACK BAR</h1>
        <div className={styles.cardsnack_body}>
          {svgsnackbar.map((el, i) => {
            return (
              <div className={styles.cardsnack} key={el.id}>
                <div
                  className={
                    (i >= 6 ? i % 2 == 0 : i % 2 == 1)
                      ? `${styles.background} ${styles.odd}`
                      : `${styles.background} ${styles.even}`
                  }
                >
                  <img src={el.src} alt={el.name} />
                </div>
                <div className={styles.plus}>
                  <button
                    className={
                      (!(i >= 6) ? i % 2 == 0 : i % 2 == 1)
                        ? styles.odd
                        : styles.even
                    }
                  >
                    +
                  </button>
                </div>
                <div className={styles.snacktext}>
                  <p>{el.name}</p>
                  <p className={styles.textsnack}>£ {el.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSnackBar;
