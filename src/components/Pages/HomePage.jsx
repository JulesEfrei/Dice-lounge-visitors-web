import React from "react";
import styles from "./styles/homePage.module.scss";
import {
  Carrousel,
  Carrousel2,
  CardMenu,
  CardSeasonal,
  CardPopular,
  CarrouselDice,
} from "../Sections";

const HomePage = () => {
  return (
    <div>
      <div className={styles.mainCarrousel}>
        <Carrousel />
      </div>
      <div className={styles.actionCarrousel}>
        <h2 className={styles.title}>The Dice</h2>
        <CarrouselDice />
      </div>
      <div>
        <h2 className={styles.title}>Come and enjoy the Dice</h2>
        <Carrousel2 />
      </div>
      <div className={styles.cardMenu}>
        <h1 className={styles.title}>Menu</h1>
        <CardMenu />
      </div>
      <div>
        <h2 className={styles.Titrebas2}>Seasonal Specials</h2>
        <CardSeasonal />
      </div>
      <div className={styles.cardPopular}>
        <h2 className={styles.Titrebas2}>Popular</h2>
        <CardPopular />
      </div>
    </div>
  );
};

export default HomePage;
