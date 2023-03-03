import React, { useState } from "react";
import styles from "./styles/bookingPage.module.scss";
import { BookingDate, BookingInfo, BookingCongrats } from "../Sections/";
import { ToastContainer } from "react-toastify";

function BookingPage() {
  const [step, setStep] = useState(3);

  const bookingData = {
    userId: JSON.parse(localStorage.getItem("userData")).id,
  };

  const addData = (field, data) => {
    bookingData[field] = data;
    console.log(bookingData);
  };

  const goBack = () => {
    setStep((curr) => curr - 1);
  };

  const goForward = () => {
    setStep((curr) => curr + 1);
  };

  return (
    <>
      <header className={styles.header}>
        <h2>Book a table</h2>
      </header>
      <section className={styles.section}>
        {step === 1 ? (
          <BookingDate
            goForward={goForward}
            updateData={(field, data) => addData(field, data)}
          />
        ) : step === 2 ? (
          <BookingInfo
            goForward={goForward}
            goBack={goBack}
            updateData={(field, data) => addData(field, data)}
          />
        ) : step === 3 ? (
          <BookingCongrats />
        ) : null}
      </section>
      <ToastContainer />
    </>
  );
}

export default BookingPage;
