import React from "react";
import styles from "./styles/menuboard.module.scss";
import { svgboard } from "../../utils/globalVariables";

const MenuBoard = () => {
  return (
    <div className={styles.Board}>
      <div className={styles.Snack}>
        <h1>BOARD</h1>
        <div className={styles.cardboard_body}>
          {svgboard.map((el, i) => {
            return (
              <div className={styles.agencement} key={el.id}>
                <div className={styles.cardsnack}>
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
                <div className={styles.desc}>
                  Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda
                  pneumafiering bes
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuBoard;
