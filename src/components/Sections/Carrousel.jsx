import React from "react";
import { images } from "../../utils/globalVariables";
import styles from "./styles/carrousel.module.scss";

const Carrousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {images.map((images, i) => {
          return (
            <div className={styles.image} key={i}>
              <img src={images} alt={i} />

              <div className={styles.textContainer}>
                <h2>Welcome to the Dice</h2>
                <h3>
                  A new way to socialize in <br /> <span>Portsmouth</span> +{" "}
                  <span>Worthing</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrousel;
