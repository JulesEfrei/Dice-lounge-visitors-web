import React from "react";
import styles from "./styles/loading.module.scss";

function Loading() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}></div>
      </div>
    </>
  );
}

export default Loading;
