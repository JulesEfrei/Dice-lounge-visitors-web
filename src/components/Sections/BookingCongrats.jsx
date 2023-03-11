import React from "react";
import { useNavigate } from "react-router";
import styles from "./styles/bookingCongrats.module.scss";

function BookingCongrats() {
  const navigation = useNavigate();

  setTimeout(() => {
    navigation("/home");
  }, 1500);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="/congratulation.svg" alt="Congratulation icon" />
        </div>
        <h2 className={styles.title}>Congratulation</h2>
        <p className={styles.text}>
          Your reservation has been taken into account. Scan your QR Code when
          you will come. See you soon!
        </p>
      </div>
    </>
  );
}

export default BookingCongrats;
