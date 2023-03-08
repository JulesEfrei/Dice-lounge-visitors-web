import React from "react";
import styles from "./styles/profilePage.module.scss";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <>
      <header className={styles.header}>
        <h2>Profile</h2>
      </header>

      <div className={styles.userMainContainer}>
        <div className={styles.img}></div>
        <p>@UserTest</p>
        <h2>User Name</h2>
      </div>

      <div className={styles.userInfoContainer}>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="./Friends.svg" alt="Friends icon" />
          </div>
          <p>35 Friends</p>
        </div>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="./Trophies.svg" alt="Trophies icon" />
          </div>
          <p>8 Trophies</p>
        </div>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="./Save.svg" alt="Save icon" />
          </div>
          <p>5 Games Saved</p>
        </div>
        <button className={styles.button}>
          <div className={styles.img}>
            <img src="./UserIcon.svg" alt="User icon" />
          </div>
          <h2>Contact Details</h2>
        </button>
      </div>

      <div className={styles.qrContainer}>
        <h4>Member since September 2020</h4>
        <div className={styles.qrcode}>
          <QRCode size={256} value="Test" fgColor="#d29628" />
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.linkContainer}>
        <Link className={styles.linkItem} to="setting">
          <img src="./Setting.svg" alt="Setting Icon" className={styles.img} />
          <p>Settings</p>
          <img
            src="./LittleArrow.svg"
            alt="Arrow Icon"
            className={styles.arrow}
          />
        </Link>
        <Link className={styles.linkItem} to="new-group">
          <img src="./Group.svg" alt="Group Icon" className={styles.img} />
          <p>New Group</p>
          <img
            src="./LittleArrow.svg"
            alt="Arrow Icon"
            className={styles.arrow}
          />
        </Link>
        <Link
          className={styles.linkItem}
          to="https://diceboardgamelounge.com/rentals/"
          target="_blank"
        >
          <img src="./Premium.svg" alt="Premium Icon" className={styles.img} />
          <p>Become a premium member</p>
        </Link>
        <Link
          className={styles.linkItem}
          to="https://diceboardgamelounge.com/about/"
          target="_blank"
        >
          <img src="./About.svg" alt="About Icon" className={styles.img} />
          <p>About Us</p>
        </Link>
      </div>
    </>
  );
}

export default ProfilePage;
