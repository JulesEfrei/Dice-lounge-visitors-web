import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/cardmenu.module.scss";
import { imagescard } from "../../utils/globalVariables";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();

  return (
    <div className={styles.All}>
      <div>
        <div className={styles.card__body}>
          {imagescard.map((el, i) => {
            return (
              <div
                onClick={() => navigate("/Menu")}
                className={
                  (i >= 6 ? i % 2 == 0 : i % 2 == 1)
                    ? `${styles.cardmenu} ${styles.odd}`
                    : `${styles.cardmenu} ${styles.even}`
                }
                key={el.id}
              >
                <Link to={el.link}>
                  <img src={el.src} alt={el.name} />
                </Link>
                <div className={styles.menutext}>
                  <p>{el.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;
