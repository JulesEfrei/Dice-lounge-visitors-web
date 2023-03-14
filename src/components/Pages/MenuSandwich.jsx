import React from "react";
import { Link } from "react-router-dom";
import { Sandwichs } from "../Sections";
import styles from "./styles/menusandwich.module.scss";

const MenuSandwich = () => {
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
        <Sandwichs />
      </div>
    </div>
  );
};

export default MenuSandwich;
