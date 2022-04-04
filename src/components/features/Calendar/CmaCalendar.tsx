import * as React from "react";
import { useState } from "react";
import * as dateFns from "date-fns";
import renderDates from "./CalendarHelper";
import { render } from "sass";

export default function CmaCalendar() {
  const [events, setEvent] = useState([]);
  const [gymClass, setGymClass] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [month, setMonth] = useState(dateFns.format(new Date(), "LLLL"));
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  console.log(dateFns.format(new Date(), "LLLL"));
  return (
    <>
      <div className="cma-calendar-box blk-bg">
        <div className="calendar">
          <div className="month">
            <h1>{month}</h1>
          </div>
          <div className="weekdays">
            {weekdays.map((day, index) => (
              <div className="weekday cell" key={index}>
                {day}
              </div>
            ))}
          </div>
          {renderDates(selectedDate)}
        </div>
      </div>

      <div className="cma-event-cards"></div>
    </>
  );
}
