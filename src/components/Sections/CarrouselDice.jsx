import React from "react";
import styles from "./styles/carrouseldice.module.scss";
import { svgdice } from "../../utils/globalVariables";

const CarrouselDice = () => {
  return (
    <div className={styles.allcard}>
      {svgdice.map((elm, index) => {
        return (
          <div className={styles.anothercard} key={`${elm.name}-${index}`}>
            <div className={styles.carddice}>
              <div className={styles.align}>
                <h3 className={styles.centre}>{elm.text}</h3>
                <button className={styles.centre}>{elm.name}</button>
              </div>
              <img src={elm.src} alt={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarrouselDice;
