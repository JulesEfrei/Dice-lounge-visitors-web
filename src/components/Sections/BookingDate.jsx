import React, { useState } from "react";
import eachWeekOfInterval from "date-fns/eachWeekOfInterval";
import { generateToast } from "../../utils/formVarification";
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import styles from "./styles/bookingDate.module.scss";
import { nextDay } from "date-fns";

function BookingDate({ goForward, updateData }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const mondays = eachWeekOfInterval(
    {
      start: new Date(2023, 2, 1),
      end: new Date(2033, 12, 31),
    },
    { weekStartsOn: 1 }
  );

  const disabledDays = mondays.map((elm) => ({
    year: elm.getFullYear(),
    month: elm.getMonth() + 1,
    day: elm.getDate(),
  }));

  const handleDisabledSelect = (disabledDay) => {
    generateToast("Unfortunately Dice is closed on Monday", "info");
  };

  const next = () => {
    if (selectedDay !== null) {
      updateData(
        "date",
        `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`
      );
      goForward();
    } else {
      generateToast("Please select a day.", "error");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Choose a date</h2>
        <div className={styles.calendarWrapper}>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            calendarClassName={styles.responsive}
            minimumDate={utils().getToday()}
            disabledDays={disabledDays}
            onDisabledDayError={handleDisabledSelect}
            colorPrimary="#0e3c52"
          />
        </div>
        <div className={styles.button} onClick={() => next()}>
          Next
        </div>
      </div>
    </>
  );
}

export default BookingDate;
