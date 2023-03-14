import React from "react";
import { Link } from "react-router-dom";
import { Salads } from "../Sections";
import styles from "./styles/menusalads.module.scss";

const MenuSalads = () => {
  return (
    <div>
      <div className={styles.topMenu}>
        <button className={styles.back}>
          <Link to="/">
            <img src="./src/assets/back.svg" alt="" />
          </Link>
        </button>
        <button className={styles.kart}>
          <Link to="/Cart">
            <img src="/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <h1>Salads</h1>
      <div className={styles.CardSalade}>
        <img src="/salade2.svg" alt="" />
      </div>
      <div className={styles.text}>
        <p className={styles.price}>£ 7,50</p>
        <p>House Leaf Mix Salad with : </p>
      </div>
      <Salads />
    </div>
  );
};

export default MenuSalads;
