import React from "react";
import { svgpopular } from "../../utils/globalVariables";
import styles from "./styles/cardpopular.module.scss";

const CardPopular = () => {
  return (
    <div className={styles.background}>
      {svgpopular.map((elm, index) => {
        return (
          <div
            className={
              (index >= 4 ? index % 2 == 1 : index % 2 == 0)
                ? `${styles.cardpopular} ${styles.odd}`
                : `${styles.cardpopular} ${styles.even}`
            }
            key={`${elm.name}-${index}`}
          >
            <img src={elm.src} alt={elm.name} />
            <div className={styles.textContainer}>
              <p>{elm.name}</p>
              <p className={styles.textBold}>£{elm.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardPopular;
