import React, { useRef, useState } from "react";
import styles from "./styles/bookingInfo.module.scss";
import Picker from "react-mobile-picker-mod";
import { generateToast } from "../../utils/formVarification";

function BookingInfo({ updateData, goForward, goBack }) {
  const [nbPeople, setNbPeople] = useState(2);
  const selectRef = useRef(null);

  const hours = new Array(12)
    .fill(0, "0")
    .map((elm, index) => (index + 1).toString());
  const minutes = new Array(60)
    .fill(0, "0")
    .map((elm, index) =>
      index < 10 ? elm + index.toString() : index.toString()
    );

  const [optionGroups, setOptionGroups] = useState({
    hours,
    minutes,
    time: ["AM", "PM"],
  });

  const [valueGroups, setValueGroups] = useState({
    hours: "11",
    minutes: "00",
    time: "AM",
  });

  const handleChange = (name, value) => {
    setValueGroups((prevValueGroups) => ({
      ...prevValueGroups,
      [name]: value,
    }));
  };

  const next = () => {
    if (selectRef.current.value == "0") {
      generateToast("Please select a place.", "error");
      return;
    }

    console.log(valueGroups);

    if (valueGroups.hours < "11" && valueGroups.time === "AM") {
      generateToast("Unfortunatly, Dice is closed before 11AM", "error");
      return;
    } else if (
      valueGroups.hours >= "10" &&
      valueGroups.time === "PM" &&
      valueGroups.minutes !== "00"
    ) {
      generateToast("Unfortunatly, Dice is closed after 10PM", "error");
      return;
    }

    updateData("placeId", selectRef.current.value);
    updateData("nbPeople", nbPeople);
    updateData("time", valueGroups);
    goForward();
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={goBack}>
          &lt;-- Go Back
        </button>
        <div className={styles.place}>
          <h2 htmlFor="place" className={styles.label}>
            Place
          </h2>
          <select
            name="place"
            id="place"
            className={styles.select}
            ref={selectRef}
          >
            <option value="0">Select Place</option>
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
        <div className={styles.submitButton} onClick={() => next()}>
          Next
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
