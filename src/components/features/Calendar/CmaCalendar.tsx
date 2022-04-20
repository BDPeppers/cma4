import * as React from "react";
import { useState, useEffect } from "react";
import * as dateFns from "date-fns";
import { Button, CircularProgress } from "@mui/material";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { el } from "date-fns/locale";
import moment from "moment";
import { EventCardList } from "./EventCards/EventCardList";

const queryClient = new QueryClient();

const CALENDAR_ID = "hvjsr15398ntm7cgqq6vp5hg5s@group.calendar.google.com";
const API_KEY = "AIzaSyDIrLYRk8P6upEoBmoF6BG3PGKAi1pDdqo";
const SCOPE = "https://www.googleapis.com/auth/calendar.events.readonly";
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

class calEvent {
  constructor(start: Date, end: Date, summary: string, description: string) {}
}
const dummydata: any[] = [];

export default function CmaCalendar() {
  const [events, setEvents] = useState(dummydata);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [gymClass, setGymClass] = useState(dummydata);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [month, setMonth] = useState(dateFns.format(new Date(), "LLLL"));
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  const getEvents = () => {
    const calEvents: any[] = [];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setIsLoadingEvents(false);
        res.items.map((item: any) => {
          events.push(item);
        });
        setEvents(calEvents);
        getDailyClasses();
      });
  };

  const getDailyClasses = () => {
    const dailyClasses = events.filter(
      (day) =>
        moment(day.start.dateTime).format("MM-DD-YYYY") ===
        moment(selectedDate).format("MM-DD-YYYY")
    );
    setGymClass(dailyClasses);
  };

  const currentDateSetter = (day: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(new Date(day.currentTarget.value));
  };

  useEffect(() => {
    getEvents();
  }, [selectedDate]);

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
    let current: Date;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        current = day;
        days.push(
          <div className="cell" key={days.length}>
            <button
              className={`cell blk-bg ${
                !dateFns.isSameMonth(day, monthStart)
                  ? "disabled"
                  : dateFns.isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
              value={current.toDateString()}
              onClick={(e) => currentDateSetter(e)}
            >
              {formattedDate}
            </button>
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
      <div className="calendar-wrapper">
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
            {renderDates()}
          </div>
        </div>

        <div className="cma-event-cards">
          {isLoadingEvents && gymClass ? (
            <CircularProgress />
          ) : (
            <EventCardList eventList={gymClass} />
          )}
        </div>
      </div>
    </>
  );
}
