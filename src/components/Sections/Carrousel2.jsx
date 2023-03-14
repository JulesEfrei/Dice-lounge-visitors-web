import React from "react";
import { images2 } from "../../utils//globalVariables";
import styles from "./styles/carrousel.module.scss";

const Carrousel = () => {
  return (
    <div className={styles.carousel}>
      {images2.map((el, i) => {
        return (
          <div key={i}>
            <img src={el} alt={i} />
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
