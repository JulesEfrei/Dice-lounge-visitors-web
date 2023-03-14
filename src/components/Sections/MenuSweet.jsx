import React from "react";
import { svgsweet } from "../../utils/globalVariables";
import styles from "./styles/menusweet.module.scss";

const MenuSweet = () => {
  return (
    <div className={styles.SnackBar}>
      <div className={styles.Snack}>
        <h1>SWEET</h1>
        <p className={styles.info}>
          Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda
          pneumafiering bes Lörem ipsum nikende sytijaskapet i kroren vuligen
          tinat. Neda pneumafiering bes
        </p>
        <div className={styles.cardsnack_body}>
          {svgsweet.map((el, i) => {
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

export default MenuSweet;
