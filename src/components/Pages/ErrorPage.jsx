import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/errorPage.module.scss";

function ErrorPage({ type }) {
  return (
    <>
      <div className={styles.container}>
        {type === "404" ? (
          <img src="./404.svg" alt="404 Illustration" />
        ) : (
          <img src="./505.svg" alt="505 Illustration" />
        )}
        <div className={styles.textContainer}>
          <h1>Oh NO!</h1>
          {type === "505" ? (
            <p>A bug occurred on this page. Please retry later</p>
          ) : (
            <p>Page not found</p>
          )}
        </div>
        <Link className={styles.button} to="/home">
          <h2>Back to home page</h2>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
