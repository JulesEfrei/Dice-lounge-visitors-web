import React from "react";
import { Link } from "react-router-dom";
import { MenuBoard } from "../Sections";
import styles from "./styles/board.module.scss";

const Board = () => {
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
        <MenuBoard />
      </div>
    </div>
  );
};

export default Board;
