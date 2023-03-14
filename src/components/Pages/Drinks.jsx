import React from "react";
import { Link } from "react-router-dom";
import { MenuDrinks } from "../Sections";
import styles from "./styles/drinks.module.scss";

const Drinks = () => {
  return (
    <div>
      <div className={styles.topMenu}>
        <button className={styles.back}>
          <Link to="/">
            <img src="/back.svg" alt="" />
          </Link>
        </button>
        <button className={styles.kart}>
          <Link to="/Cart">
            <img src="/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <div>
        <MenuDrinks />
      </div>
    </div>
  );
};

export default Drinks;
