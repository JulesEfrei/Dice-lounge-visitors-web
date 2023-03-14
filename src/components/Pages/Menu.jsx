import React from "react";
import styles from "./styles/menu.module.scss";
import { CardSnackBar } from "../Sections";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <div className={styles.topMenu}>
        <Link to="/">
          <button>
            <img src="/back.svg" alt="" />
          </button>
        </Link>
        <button>
          {" "}
          <Link to="/Cart">
            <img src="/kart.svg" alt="" />
          </Link>
        </button>
      </div>
      <CardSnackBar />
    </div>
  );
};

export default Menu;
