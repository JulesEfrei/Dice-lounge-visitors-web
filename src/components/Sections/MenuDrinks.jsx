import React from "react";
import { svgdrinks } from "../../utils/globalVariables";
import styles from "./styles/menudrinks.module.scss";

const MenuDrinks = () => {
  return (
    <div className={styles.SnackBar}>
      <div className={styles.Snack}>
        <h1>SANDWICH</h1>
        <div className={styles.cardsnack_body}>
          {svgdrinks.map((el, i) => {
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

export default MenuDrinks;
