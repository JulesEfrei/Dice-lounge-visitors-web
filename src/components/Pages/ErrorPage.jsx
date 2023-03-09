import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/errorPage.module.scss";

function ErrorPage({ type }) {
  return (
    <>
      <header className={styles.header}>
        <h2>Error</h2>
      </header>
      <div className={styles.container}>
        <img src="./404.svg" alt="404 Illustration" />
        <div className={styles.textContainer}>
          <h1>Oh NO!</h1>
          {type === "500" ? (
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
