import React, { useState } from "react";
import { BookingDate, BookingInfo, BookingCongrats } from "../Sections/";
import { ToastContainer } from "react-toastify";
import { generateToast } from "../../utils/formVarification";

function BookingPage() {
  console.log("Booking Page");
  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] = useState({
    userId: JSON.parse(localStorage.getItem("userData")).id,
  });

  const addData = (field, data) => {
    setBookingData((curr) => ({
      ...curr,
      [field]: data,
    }));
  };

  const goBack = () => {
    setStep((curr) => curr - 1);
  };

  const goForward = () => {
    setStep((curr) => curr + 1);
  };

  const sendData = async () => {
    const body = {
      userId: bookingData["userId"],
      nbPeople: bookingData["nbPeople"],
      placeId: bookingData["placeId"],
      date: `${bookingData["date"]} ${bookingData["time"].hours}:${bookingData["time"].minutes}-00`,
    };

    try {
      const req = await fetch("http://localhost:3000/api/v1/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userData")).accessToken
          }`,
        },
        body: JSON.stringify(body),
      });
      const res = await req.json();

      if (!res.error) {
        goForward();
      } else {
        goBack();
        generateToast("An error occured. Please try again", "error");
      }
    } catch (err) {
      generateToast("An error occured. Please try again", "error");
    }
  };

  if (step === 3) sendData();

  return (
    <>
      <section>
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
            post={sendData}
          />
        ) : step === 4 ? (
          <BookingCongrats />
        ) : null}
      </section>
      <ToastContainer />
    </>
  );
}

export default BookingPage;
