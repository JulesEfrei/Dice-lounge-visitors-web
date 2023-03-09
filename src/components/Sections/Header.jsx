import React from "react";
import { useLocation, useRevalidator } from "react-router";
import styles from "./styles/header.module.scss";

function Header() {
  const page = window.location.pathname.split("/")[1];

  return (
    <>
      <header className={styles.header}>
        {page !== "home" ? (
          <h2>{page}</h2>
        ) : page === "home" ? (
          <div className={styles.imgContainer}>
            <img
              src="./LOGO_White.png"
              alt="Dice Logo"
              className={styles.img}
            />
          </div>
        ) : null}
      </header>
    </>
  );
}

export default Header;
