import * as React from "react";

export interface IEventCardProps {
  eventTitle: any;
  eventHost: any;
  eventStart: any;
  eventEnd: any;
  eventDesc: any;
}

export default function EventCard(props: IEventCardProps) {
  return (
    <div className="event-card blk-bg">
      <h1 className="event-title">{props.eventTitle}</h1>
      <h2 className="event-host">{props.eventHost}</h2>
      <div className="time-box">
        <h2 className="event-time">{props.eventEnd}</h2>
        &nbsp;&nbsp;&ndash;&nbsp;&nbsp;
        <h2 className="event-time">{props.eventStart}</h2>
      </div>
      {/* <h2 className="event-description">{props.eventDesc}</h2> */}
      <h2 className="event-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h2>
    </div>
  );
}
