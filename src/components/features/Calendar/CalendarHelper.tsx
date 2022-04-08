import * as dateFns from "date-fns";
import * as React from "react";
import axios from "axios";

const CALENDAR_ID = "hvjsr15398ntm7cgqq6vp5hg5s@group.calendar.google.com";
const API_KEY = "AIzaSyDIrLYRk8P6upEoBmoF6BG3PGKAi1pDdqo";
const SCOPE = "https://www.googleapis.com/auth/calendar.events.readonly";
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

//get events - > event cards will display acording to selected date
///utlize the google calendar API and figure out how to return recurring events
////make a more efficent API call instead of calling everything - call the past month and current month
//read-only access to Events - https://www.googleapis.com/auth/calendar.events.readonly

// 1.Obtain OAuth 2.0 credentials from API Console

// 2.Obtain an access token from the Google Autorization Server

// 3. Examine scope of access - read-only access to Events

export async function getEvents() {
  const res = await axios
    .get(url)
    .then((res) => {
      console.log(res.data.items);
      return res.data.items;
    })
    .catch((error) => {
      return false;
    });
  return false;
}

//render days of the month and handle highlighting
//the selected date will b highligted
export default function renderDates(selectedDate: Date) {
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
