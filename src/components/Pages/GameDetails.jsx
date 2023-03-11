import React from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./styles/gameDetails.module.scss";

function GameDetails() {
  const navigate = useNavigate();

  let { gameId } = useParams();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.items} onClick={() => navigate(-1)}>
          <img src="/Arrow.svg" alt="Arrow" />
        </div>
        <div className={styles.items}>
          <img src="/Save.svg" alt="Arrow" />
        </div>
      </div>
      <div className={styles.gameImg}>
        <div
          className={styles.img}
          style={{ backgroundImage: `url("/Cover.png")` }}
        ></div>
      </div>
      <div className={styles.mainContainer}>
        <h2>Age of Conan</h2>
        <div className={styles.tags}>
          <div className={styles.items}>
            <img src="/Star.svg" alt="Star" />
            <p>4.5</p>
          </div>
          <div className={styles.items}>
            <img src="/Livre.svg" alt="Price" />
            <p>55,00</p>
          </div>
          <div className={styles.items}>
            <img src="/Calendar.svg" alt="Calendar" />
            <p>20 May 2008</p>
          </div>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Consectetur risus nulla
          iaculis ac faucibus lectus cras bibendum dignissim. Dolor turpis et
          euismod lacinia vitae amet quis. Ultrices morbi porttitor tortor
          lobortis ut turpis vestibulum. In etiam odio neque at sed consequat
          tristique quis. Nunc sit diam nibh vestibulum donec. Est volutpat nibh
          morbi aliquam gravida potenti. Sed tellus cursus sit leo viverra ut
          facilisi id. Eget mauris ipsum accumsan nunc nunc justo. Nec tristique
          nec elementum orci. Orci amet aliquet elit amet ornare aliquam porta
          pretium lectus. Nisi nisl mattis pulvinar dignissim tempus. In sit
          orci do
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.button} onClick={() => navigate("/booking")}>
          <h2>Book the game</h2>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
