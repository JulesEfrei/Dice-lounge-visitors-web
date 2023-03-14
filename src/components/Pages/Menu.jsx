import React from "react";
import styles from "./styles/menu.module.scss";
import { CardSnackBar } from "../Sections";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.Menu}>
      <div className={styles.topMenu}>
        <button onClick={() => navigate(-1)}>
          <img src="/back.svg" alt="" />
        </button>
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
