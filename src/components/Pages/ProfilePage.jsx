import React, { useState } from "react";
import styles from "./styles/profilePage.module.scss";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import useSwr from "swr";
import { Loading } from "../Atoms/";
import { ErrorPage } from "../Pages/";
import generateAvatar from "../../utils/avatar";

function ProfilePage({ logout }) {
  const [avatar, setAvatar] = useState(null);
  const user = JSON.parse(localStorage.getItem("userData"));

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSwr(
    `http://localhost:3000/api/v1/user/${user.id}`,
    fetcher
  );

  const updateAvatar = () => {
    return generateAvatar(
      user.userName,
      "adventurer",
      data.user.gender === "Male" ? "Male" : "Female"
    );
  };

  if (error) return <ErrorPage type="505" />;
  if (isLoading) return <Loading />;
  return (
    <>
      <div
        className={styles.userMainContainer}
        onClick={() => setAvatar(updateAvatar)}
      >
        <img
          src={avatar ? avatar : updateAvatar()}
          alt="Profile picture"
          className={styles.img}
        />
        <p>@{data.user.userName}</p>
        <h2>{data.user.firstName}</h2>
      </div>

      <div className={styles.userInfoContainer}>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="/Friends.svg" alt="Friends icon" />
          </div>
          <p>0 Friends</p>
        </div>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="/Trophies.svg" alt="Trophies icon" />
          </div>
          <p>{data.user.UserToBadge.length} Trophies</p>
        </div>
        <div className={styles.items}>
          <div className={styles.img}>
            <img src="/Save.svg" alt="Save icon" />
          </div>
          <p>{data.user.gameLike.length} Games Saved</p>
        </div>
        <button className={styles.button}>
          <div className={styles.img}>
            <img src="/UserIcon.svg" alt="User icon" />
          </div>
          <h2>Contact Details</h2>
        </button>
      </div>

      <div className={styles.qrContainer}>
        <h4>Member since September 2020</h4>
        <div className={styles.qrcode}>
          <QRCode
            size={256}
            value={`http://localhost:3000/api/v1/user/${user.id}`}
            fgColor="#d29628"
          />
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.linkContainer}>
        <Link className={styles.linkItem} to="setting">
          <img src="/book.svg" alt="Setting Icon" className={styles.img} />
          <p>My bookings</p>
          <img
            src="./LittleArrow.svg"
            alt="Arrow Icon"
            className={styles.arrow}
          />
        </Link>
        <Link className={styles.linkItem} to="setting">
          <img src="/Setting.svg" alt="Setting Icon" className={styles.img} />
          <p>Settings</p>
          <img
            src="./LittleArrow.svg"
            alt="Arrow Icon"
            className={styles.arrow}
          />
        </Link>
        <Link className={styles.linkItem} to="new-group">
          <img src="/Group.svg" alt="Group Icon" className={styles.img} />
          <p>New Group</p>
          <img
            src="/LittleArrow.svg"
            alt="Arrow Icon"
            className={styles.arrow}
          />
        </Link>
        <Link
          className={`${styles.linkItem} ${styles.underline}`}
          to="https://diceboardgamelounge.com/rentals/"
          target="_blank"
        >
          <img src="/Premium.svg" alt="Premium Icon" className={styles.img} />
          <p>Become a premium member</p>
        </Link>
        <Link
          className={`${styles.linkItem} ${styles.underline}`}
          to="https://diceboardgamelounge.com/about/"
          target="_blank"
        >
          <img src="./About.svg" alt="About Icon" className={styles.img} />
          <p>About Us</p>
        </Link>
        <div className={`${styles.linkItem} ${styles.logout}`} onClick={logout}>
          <img src="/logout.svg" alt="About Icon" className={styles.img} />
          <p>Log out</p>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
