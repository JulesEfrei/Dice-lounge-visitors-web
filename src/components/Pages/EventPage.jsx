import React from "react";
import useSwr from "swr";
import styles from "./styles/eventPage.module.scss";
import { ErrorPage } from "./";
import { Loading } from "../Atoms/";
import { EventCard } from "../Sections/";

function EventPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr(
    "http://localhost:3000/api/v1/event",
    fetcher
  );

  if (error) return <ErrorPage type="505" />;
  if (isLoading) return <Loading />;
  if (!isLoading && data.error) return <ErrorPage type="404" />;
  return (
    <>
      <div className={styles.mainContainer}>
        <h2>Explore</h2>
        <div className={styles.wrapper}>
          {data.data.map((elm, index) => (
            <div className={styles.items} key={elm.id}>
              <EventCard data={elm} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EventPage;
