import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/menu.module.scss";

function Menu() {
  const [navItems, setNavItems] = useState([
    { name: "Home", link: "/home", icon: "/HomeIcon.svg", active: true },
    {
      name: "Discussion",
      link: "/discution",
      icon: "/MsgIcon.svg",
      active: false,
    },
    { name: "Games", link: "/games", icon: "/DiceIcon.svg", active: false },
    { name: "Account", link: "/account", icon: "/UserIcon.svg", active: false },
  ]);

  const [reload, setReload] = useState(0);

  const changeActive = (index) => {
    const tt = reload + 1;
    setReload(tt);
    const temp = navItems;
    temp.find((elm) => elm.active === true).active = false;
    temp[index].active = true;
    setNavItems(temp);
    console.log(temp);
  };

  return (
    <>
      <div className={styles.navbar}>
        {navItems.map((elm, index) => {
          return (
            <Link
              key={`${elm.name}-${index}`}
              to={elm.link}
              className={`${styles.link} ${elm.active ? styles.active : ""}`}
              onClick={() => changeActive(index)}
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
