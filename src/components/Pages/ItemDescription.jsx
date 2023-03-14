import React, { useState } from "react";
import styles from "./styles/itemdescription.module.scss";
import { CardItem } from "../Sections";
import { Link } from "react-router-dom";

const ItemDescription = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className={styles.Page}>
        <div className={styles.topMenu}>
          <button className={styles.back}>
            <Link to={"/Menu"}>
              <img src="/back.svg" alt="" />
            </Link>
          </button>
          <button className={styles.kart}>
            <Link to="/Cart">
              <img src="/kart.svg" alt="" />
            </Link>
          </button>
        </div>
        <div className={styles.Item}>
          <div className={styles.dot}></div>
          <img className={styles.cheese} src="/fromage.svg" alt="" />
        </div>
      </div>
      <div className={styles.BasPage}>
        <button className={styles.note}>
          <img className={styles.star} src="/Star.svg" alt="" />
          &ensp;
          <p> 4.5</p>
        </button>
        <div className={styles.cheese2}>
          <h3>Cheddars</h3>
          <div className={styles.count}>
            <div onClick={() => setCount(count - 1)}>
              <img src="/moins.svg" alt="" />
            </div>
            &ensp;
            <p>{count}</p>
            &ensp;
            <div onClick={() => setCount(count + 1)}>
              <img src="/plus.svg" alt="" />
            </div>
          </div>
        </div>
        <p className={styles.Desc}>
          Lörem ipsum nikende sytijaskapet i kroren vuligen tinat. Neda
          pneumafiering bes. Spes vydehet. Berat on, iling, i terabel bejörade.
          Seheten således.{" "}
        </p>
        <h4>Adds on</h4>
        <CardItem />
        <div className={styles.btncart}>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
