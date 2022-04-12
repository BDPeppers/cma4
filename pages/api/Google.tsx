import google from "googleapis";
import { calendar } from "googleapis/build/src/apis/calendar";

const CALENDAR_ID = "hvjsr15398ntm7cgqq6vp5hg5s@group.calendar.google.com";
const API_KEY = "AIzaSyDIrLYRk8P6upEoBmoF6BG3PGKAi1pDdqo";
const SCOPE = "https://www.googleapis.com/auth/calendar.events.readonly";
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

const getCalendar = new google.calendar_v3.Calendar({
  auth: API_KEY,
});
const params = {
  calendarId: CALENDAR_ID,
};

//Calendar API
export default function getCalendarEvents() {
  let events = null;
  try {
    let events = getCalendar.events.list(params).then((res) => {
      console.log(events);
    });
  } catch (error) {
    console.log(error);
  }
  return events;
}
