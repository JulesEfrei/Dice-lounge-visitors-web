import React from "react";
import styles from "./styles/cardseasonal.module.scss";

const CardSeasonal = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://www.freepnglogos.com/uploads/fries-png/french-fries-side-transparent-png-stickpng-3.png"
        alt=""
      />
      <p>Offers</p>
      <h2>Choice of meal and side dishes</h2>
    </div>
  );
};

export default CardSeasonal;
