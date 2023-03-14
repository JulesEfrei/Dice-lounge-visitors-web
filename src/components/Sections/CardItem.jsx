import React from "react";
import styles from "./styles/carditem.module.scss";
import { svgitem } from "../../utils/globalVariables";

const CardItem = () => {
  return (
    <div className={styles.adds}>
      {svgitem.map((el, i) => {
        return (
          <div className={styles.carditem} key={el.id}>
            <img className={styles.products} src={el.src} alt={el.name} />
            <div className={styles.plus}>
              <img
                className={
                  (!(i >= 6) ? i % 2 == 0 : i % 2 == 1)
                    ? styles.odd
                    : styles.even
                }
                src="/plus_button.svg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardItem;
