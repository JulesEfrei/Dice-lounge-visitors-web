import React from "react";
import styles from "./styles/sandwichs.module.scss";
import { svgsandwichs } from "../../utils/globalVariables";

const Sandwichs = () => {
  return (
    <div className={styles.SnackBar}>
      <div className={styles.Snack}>
        <h1>SANDWICH</h1>
        <div className={styles.cardsnack_body}>
          {svgsandwichs.map((el, i) => {
            return (
              <div className={styles.cardsnack} key={el.id}>
                <div
                  className={
                    (i >= 6 ? i % 2 == 0 : i % 2 == 1)
                      ? `${styles.background} ${odd}`
                      : `${styles.background} ${even}`
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

export default Sandwichs;
