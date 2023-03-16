import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/cardmenu.module.scss";
import { imagescard } from "../../utils/globalVariables";

function Card() {
  return (
    <div className={styles.All}>
      {imagescard.map((elm, index) => {
        return (
          <div
            className={
              (index >= 6 ? index % 2 == 0 : index % 2 == 1)
                ? `${styles.cardmenu} ${styles.odd}`
                : `${styles.cardmenu} ${styles.even}`
            }
            key={elm.id}
          >
            <Link to={elm.link}>
              <img src={elm.src} alt={elm.name} />
            </Link>
            <div className={styles.menutext}>
              <p>{elm.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
