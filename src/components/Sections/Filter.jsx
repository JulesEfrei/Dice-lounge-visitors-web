import React, { useState } from "react";
import { type } from "../../utils/globalVariables";
import styles from "./styles/filter.module.scss";

const Filter = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.filtercard}>
      {type.map((type, i) => {
        return (
          <div
            onClick={() => {
              setFilter(type.type);
            }}
            className={styles.cardfilter}
            key={i}
          >
            <div>
              <img src={type.src} alt={i} />
            </div>
            <p>{type.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
