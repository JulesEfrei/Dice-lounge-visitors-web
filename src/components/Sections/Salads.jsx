import React from "react";
import styles from "./styles/salads.module.scss";
import { svgsalads } from "../../utils/globalVariables";

const Salads = () => {
  return (
    <div className={styles.SnackBar}>
      <div className={styles.Snack}>
        <div className={styles.cardsnack_body}>
          {svgsalads.map((el, i) => {
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Salads;
