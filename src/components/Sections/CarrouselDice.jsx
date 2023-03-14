import React from "react";
import styles from "./styles/carrouseldice.module.scss";
import { svgdice } from "../../utils/globalVariables";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const CarrouselDice = () => {
  return (
    <div className={styles.allcard}>
      {svgdice.map((elm, index) => {
        return (
          <div className={styles.anothercard} key={`${elm.name}-${index}`}>
            <div className={styles.carddice}>
              <div className={styles.align}>
                <h4>{elm.text}</h4>
                <Link className={styles.button} to={elm.link}>
                  {elm.name}
                </Link>
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
