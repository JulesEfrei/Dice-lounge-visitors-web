import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/welcomePage.module.scss";

function WelcomePage({ router }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2200);
  }, []);

  return (
    <>
      <section>
        <div className={styles.container}>
          <img src="./LOGO_White.png" alt="Dice Logo" className={styles.img} />
          {isShow ? (
            <Link
              to={router === "app" ? "/home" : "login"}
              className={styles.button}
            >
              Start
            </Link>
          ) : null}
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
