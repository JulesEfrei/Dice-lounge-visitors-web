import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/menu.module.scss";

function Menu() {
  const [navItems, setNavItems] = useState([
    { name: "Home", link: "/home", icon: "/HomeIcon.svg" },
    {
      name: "Forum",
      link: "/forum",
      icon: "/MsgIcon.svg",
    },
    { name: "Games", link: "/games", icon: "/DiceIcon.svg" },
    { name: "Account", link: "/profile", icon: "/UserIcon.svg" },
  ]);

  const [activeLinks, setActiveLinks] = useState(
    window.window.location.pathname
  );
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className={styles.burger} onClick={() => setIsShow((curr) => !curr)}>
        {!isShow ? (
          <img
            src="burger.svg"
            alt="Burger menu Icon"
            className={styles.line}
          />
        ) : (
          <img
            src="cross.png"
            alt="Burger menu Icon"
            className={styles.cross}
          />
        )}
      </div>
      {isShow ? (
        <div className={styles.navbar}>
          {navItems.map((elm, index) => {
            return (
              <Link
                key={`${elm.name}-${index}`}
                to={elm.link}
                className={`${styles.link} ${
                  activeLinks === elm.link ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveIndex(window.window.location.pathname);
                  setIsShow(false);
                }}
              >
                <div className={styles.img}>
                  <img src={`./${elm.icon}`} alt={elm.name} />
                </div>
                <p className={styles.text}>{elm.name}</p>
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Menu;
