import React, { useState } from "react";
import styles from "./styles/bookingInfo.module.scss";
import Picker from "react-mobile-picker-mod";

function BookingInfo() {
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
          <label htmlFor="place">Place</label>
          <select name="place" id="place">
            <option value="Select Place">Select Place</option>
            <option value="1">Portsmouth</option>
            <option value="2">Worthing</option>
          </select>
        </div>
        <div className={styles.people}>
          <Picker
            optionGroups={optionGroups}
            valueGroups={valueGroups}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
