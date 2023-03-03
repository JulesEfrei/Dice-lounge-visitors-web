import React, { useState } from "react";
import styles from "./styles/bookingInfo.module.scss";
import Picker from "react-mobile-picker-mod";

function BookingInfo() {
  const [nbPeople, setNbPeople] = useState(2);

  const hours = new Array(12)
    .fill(0, 0)
    .map((elm, index) => (index + 1).toString());
  const minutes = new Array(60)
    .fill(0, 0)
    .map((elm, index) => index.toString());

  const [optionGroups, setOptionGroups] = useState({
    hours,
    minutes,
    time: ["AM", "PM"],
  });

  const [valueGroups, setValueGroups] = useState({
    hours: "10",
    minutes: "0",
    time: "AM",
  });

  const handleChange = (name, value) => {
    setValueGroups((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.place}>
          <h2 htmlFor="place" className={styles.label}>
            Place
          </h2>
          <select name="place" id="place" className={styles.select}>
            <option value="Select Place">Select Place</option>
            <option value="1">Portsmouth</option>
            <option value="2">Worthing</option>
          </select>
        </div>
        <div className={styles.time}>
          <h2 className={styles.text}>Pick a time</h2>
          <Picker
            optionGroups={optionGroups}
            valueGroups={valueGroups}
            onChange={handleChange}
          />
        </div>
        <div className={styles.people}>
          <h2 className={styles.title}>Number of people</h2>
          <div className={styles.wrapper}>
            <button
              className={styles.button}
              onClick={() => setNbPeople((curr) => curr - 1)}
              disabled={nbPeople === 2 ? true : false}
            >
              -
            </button>
            <h3 className={styles.count}>{nbPeople}</h3>
            <button
              className={styles.button}
              onClick={() => setNbPeople((curr) => curr + 1)}
              disabled={nbPeople === 10 ? true : false}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.submitButton}>Next</div>
      </div>
    </>
  );
}

export default BookingInfo;
