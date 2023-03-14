import React from "react";
import { Link } from "react-router-dom";
import { MenuSweet } from "../Sections";
import styles from "./styles/sweet.module.scss";

const Sweet = () => {
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
        <MenuSweet />
      </div>
    </div>
  );
};

export default Sweet;
