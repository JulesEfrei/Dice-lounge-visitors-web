import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/welcomePage.module.scss";

function WelcomePage({ router }) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <img src="./LOGO_White.png" alt="Dice Logo" className={styles.img} />
          <Link
            to={router === "app" ? "/home" : "login"}
            className={styles.button}
          >
            Start
          </Link>
          <div className={styles.background}></div>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
