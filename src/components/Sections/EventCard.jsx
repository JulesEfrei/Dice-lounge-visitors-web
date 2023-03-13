import React from "react";
import { useNavigate } from "react-router";
import styles from "./styles/eventCard.module.scss";

function EventCard({ data }) {
  const navigate = useNavigate();

  const ellipsis = (text) => {
    return text.slice(0, 45) + "...";
  };

  return (
    <>
      <div
        className={styles.container}
        onClick={() => navigate(`./${data.id}`)}
      >
        <div className={styles.imgContainer}>
          <div
            className={styles.img}
            style={{ backgroundImage: `url(${data.img})` }}
          ></div>
        </div>
        <h2 className={styles.title}>{data.name}</h2>
        <p className={styles.placeName}>{data.place.name}</p>
        <p className={styles.description}>{ellipsis(data.description)}</p>
      </div>
    </>
  );
}

export default EventCard;
