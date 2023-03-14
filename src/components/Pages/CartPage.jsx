import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/cartpage.module.scss";
import { useNavigate } from "react-router";

const CartPage = () => {
  const [count, setCount] = useState(0);
  const [coun, setCoun] = useState(0);

  const navigate = useNavigate();

  return (
    <div>
      <button className={styles.back}>
        <div onClick={() => navigate(-1)}>
          <img src="/back.svg" alt="" />
        </div>
      </button>
      <div className={styles.Item}>
        <div className={styles.cardcart}>
          <img src="/fromage.svg" alt="" />
        </div>
        <div className={styles.center}>
          <p className={styles.Name}>Cheddars</p>
          <p className={styles.Price}>£ 2,00</p>
          <div className={styles.compteur}>
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
        <img className={styles.delete} src="/delete.svg" alt="" />
      </div>
      <div className={styles.Item}>
        <div className={styles.cardcart}>
          <img src="/burgerpesto.svg" alt="" />
        </div>
        <div className={styles.center}>
          <p className={styles.Name}>Cheddars</p>
          <p className={styles.Price}>£ 8,95</p>
          <div className={styles.compteur}>
            <div onClick={() => setCoun(coun - 1)}>
              <img src="/moins.svg" alt="" />
            </div>
            &ensp;
            <p>{coun}</p>
            &ensp;
            <div onClick={() => setCoun(coun + 1)}>
              <img src="/plus.svg" alt="" />
            </div>
          </div>
        </div>
        <img className={styles.delete} src="/delete.svg" alt="" />
      </div>
      <div className={styles.order}>
        <h3>Order Instructions</h3>
        <input type="text" placeholder="Tape here..." />
      </div>
      <div className={styles.total}>
        <h3>Total:</h3>
        <p>£ 8,95</p>
      </div>
      <div className={styles.boutons}>
        <button className={styles.checkout}>Checkout</button>
        <Link to={"/Menu"}>
          <button className={styles.back}>Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
