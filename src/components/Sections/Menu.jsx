import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/menu.module.scss";

function Menu() {
  console.log("Menu");

  const [navItems, setNavItems] = useState([
    { name: "Home", link: "/home", active: true },
    { name: "Games", link: "/games", active: false },
    { name: "Discussion", link: "/discution", active: false },
    { name: "Account", link: "/account", active: false },
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
        {/* <p>{first}</p> */}
        {navItems.map((elm, index) => {
          return (
            <Link
              key={`${elm.name}-${index}`}
              to={elm.link}
              className={`${styles.link} ${elm.active ? styles.active : ""}`}
              onClick={() => changeActive(index)}
            >
              <div className={styles.img}></div>
              <p className={styles.text}>{elm.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
