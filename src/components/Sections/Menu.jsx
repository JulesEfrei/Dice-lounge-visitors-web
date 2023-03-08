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

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={styles.navbar}>
        {navItems.map((elm, index) => {
          return (
            <Link
              key={`${elm.name}-${index}`}
              to={elm.link}
              className={`${styles.link} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.img}>
                <img src={`./${elm.icon}`} alt={elm.name} />
              </div>
              <p className={styles.text}>{elm.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
