import React from "react";
import { useNavigate, useParams } from "react-router";
import useSwr from "swr";
import { ErrorPage } from "./";
import { Loading } from "../Atoms/";
import styles from "./styles/eventDetails.module.scss";
import { Link } from "react-router-dom";

function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  let event;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    `http://localhost:3000/api/v1/event/`,
    fetcher
  );

  if (error) return <ErrorPage type="505" />;
  if (isLoading) return <Loading />;
  if (!isLoading && data.error) return <ErrorPage type="404" />;
  if (!isLoading) {
    event = data.data.find((elm) => elm.id === eventId);
  }
  return (
    <>
      <div className={styles.section}>
        <div className={styles.goBackContainer}>
          <button onClick={() => navigate(-1)}>&lt;-- Go Back</button>
        </div>
        <div className={styles.imgContainer}>
          <img src={event.img} alt="Event Image" />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.border}>
            <p className={styles.subtitle}>Event's name</p>
            <h2 className={styles.nameTitle}>{event.name}</h2>
          </div>
          <div className={`${styles.border} ${styles.date}`}>
            <div className={styles.top}>
              <div className={styles.left}>
                <p className={styles.subtitle}>Date</p>
                <div className={styles.content}>
                  <h2 className={styles.titleClassic}>
                    {event.day
                      ? "Every " + event.day
                      : event.exactDate
                      ? event.exactDate
                      : "N/A"}
                  </h2>
                  <img src="/eventCalendar.svg" alt="Calendar Icon" />
                </div>
              </div>
              <div className={styles.right}>
                <p className={styles.subtitle}>Time</p>
                <div className={styles.content}>
                  <h2 className={styles.titleClassic}>{event.time}</h2>
                  <img src="/clock.svg" alt="Clock Icon" />
                </div>
              </div>
            </div>
            <p className={styles.subtitle}>In {event.place.city}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.titleClassic}>Description</h2>
            <p className={styles.subtitle}>{event.description}</p>
          </div>
          <Link
            className={styles.buttonContainer}
            to={
              event.link
                ? event.link
                : "https://diceboardgamelounge.com/events/"
            }
          >
            <h2>Sign Up</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
