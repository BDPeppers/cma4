import * as React from "react";

export interface IEventCardProps {
  eventTitle: string;
  eventHost: string;
  eventTime: string;
  eventdesc: string;
}

export default function EventCard(props: IEventCardProps) {
  return (
    <div className="event-card">
      <h1 className="event-title">{props.eventTitle}</h1>
      <h2 className="event-host">{props.eventHost}</h2>
      <h2 className="event-time">{props.eventTime}</h2>
      <h2 className="event-description">{props.eventdesc}</h2>
    </div>
  );
}
