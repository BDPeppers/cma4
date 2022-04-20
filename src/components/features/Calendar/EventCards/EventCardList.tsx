import moment from "moment";
import * as React from "react";
import EventCard from "./EventCard";

export interface IEventCardListProps {
  eventList: Array<any>;
}

export function EventCardList(props: IEventCardListProps) {
  return (
    <>
      {props.eventList.map((event, x) => {
        return (
          <EventCard
            key={x}
            eventTitle={event.summary}
            eventHost={event.description}
            eventStart={moment(event.start.dateTime).format("LT")}
            eventEnd={moment(event.end.dateTime).format("LT")}
            eventDesc={event.summary}
          ></EventCard>
        );
      })}
    </>
  );
}
