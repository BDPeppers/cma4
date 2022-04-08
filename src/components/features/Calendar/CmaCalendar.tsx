import * as React from "react";
import { useState } from "react";
import * as dateFns from "date-fns";
import { getEvents } from "./CalendarHelper";
import { CircularProgress } from "@mui/material";

export default function CmaCalendar() {
  const [events, setEvent] = useState(getEvents());
  const test = getEvents();
  const [gymClass, setGymClass] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [month, setMonth] = useState(dateFns.format(new Date(), "LLLL"));
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  function renderDates() {
    // returns month start date of current date
    const monthStart = dateFns.startOfMonth(new Date());
    //returns month end date of current date
    const monthEnd = dateFns.endOfMonth(monthStart);
    //returns week start date of current date ~ a sunday
    const startDate = dateFns.startOfWeek(monthStart);
    //returns week end date of current date ~ a saturday
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "d";

    const rows = [];
    let days = [];
    let day = startDate; //first sunday
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={days.length}
            // onClick={() => this.onDateClick(cloneDay)} selected date function
          >
            {formattedDate}
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={rows.length}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="dates">{rows}</div>;
  }

  return (
    <>
      <div className="cma-calendar-box blk-bg">
        <div className="calendar">
          <div className="month">
            <h1>{month}</h1>
          </div>
          <div className="weekdays">
            {weekdays.map((day, index) => (
              // console.log(index)
              <div className="weekday cell" key={index}>
                {day}
              </div>
            ))}
          </div>
          {renderDates()}
        </div>
      </div>

      <div className="cma-event-cards">
        {/* {events ? <CircularProgress /> : <div></div>} */}
      </div>
    </>
  );
}
function renderDates() {
  throw new Error("Function not implemented.");
}
