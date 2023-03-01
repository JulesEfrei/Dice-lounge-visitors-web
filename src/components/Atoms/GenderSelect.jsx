import React, { useState } from "react";
import styles from "./styles/genderSelect.module.scss";

function GenderSelect({ state, handleChange }) {
  const label = ["Male", "Female", "Other"];

  return (
    <>
      <div className={styles.container}>
        <p className={styles.label}>Gender</p>
        <div className={styles.wrapper}>
          <div
            className={styles.background}
            style={{ transform: `translateX(${state * 100}%)` }}
          ></div>
          {label.map((elm, index) => {
            return (
              <div
                className={styles.items}
                key={`${elm}-${index}`}
                onClick={() => handleChange(index)}
              >
                {elm}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default GenderSelect;
