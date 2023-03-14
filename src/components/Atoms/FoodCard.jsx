import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/foodCard.module.scss";

function FoodCard({ el, i }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.cardContainer}
      onClick={() => navigate("/description")}
    >
      <div
        className={
          (i >= 6 ? i % 2 == 0 : i % 2 == 1)
            ? `${styles.background} ${styles.odd}`
            : `${styles.background} ${styles.even}`
        }
      >
        <img src={el.src} alt={el.name} />
      </div>
      <div className={styles.plus}>
        <button
          className={
            (!(i >= 6) ? i % 2 == 0 : i % 2 == 1) ? styles.odd : styles.even
          }
        >
          +
        </button>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.foodName}>{el.name}</p>
        <p className={styles.price}>£ {el.price}</p>
      </div>
    </div>
  );
}

export default FoodCard;
