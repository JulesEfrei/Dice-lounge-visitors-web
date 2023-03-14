import React, { useEffect } from "react";
import styles from "./styles/menu.module.scss";
import { FoodCard } from "../Atoms";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import * as food from "../../utils/globalVariables";

const Menu = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const arr = category
    .split("-")
    .map((elm) => elm[0].toUpperCase() + elm.slice(1))
    .join("");

  return (
    <div className={styles.Menu}>
      <div className={styles.topMenu}>
        <button onClick={() => navigate(-1)} className={styles.button}>
          <img src="/back.svg" alt="" />
        </button>
        <Link to="/Cart" className={styles.button}>
          <img src="/kart.svg" alt="Cart Icon" />
        </Link>
      </div>
      <div className={styles.foodWrapper}>
        <h2>{category.replaceAll("-", " ")}</h2>
        <div className={styles.container}>
          {food[arr].map((elm, index) => (
            <div className={styles.items} key={index}>
              <FoodCard el={elm} i={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
