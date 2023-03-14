import React from "react";
import { images2 } from "../../utils/globalVariables";
import styles from "./styles/carrousel.module.scss";

const Carrousel = () => {
  return (
    <div className={styles.carousel}>
      {images2.map((elm, index) => {
        return (
          <div key={index}>
            <img src={elm} alt={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
