import * as React from "react";

export interface IEventCardProps {
  eventTitle: any;
  eventHost: any;
  eventStart: any;
  eventEnd: any;
  eventDesc: any;
}

const getclassDescription = (classTitle: string) => {
  switch (classTitle) {
    case "Rip & Ride":
      return " 30 min of Power Shred + 30 min of Spin";
    case "Yoga Vibez":
      return "Guided practice to increase awareness and mindfulness of the breath and body";
    case "Zumba":
    case "Funk Fusion":
      return "Aerobic fitness/interval training through dance";
    case "Kickboxing":
    case "Kickbox & Step":
      return "Combo of martial arts and fast paced cardio";
    case "Booty Blast":
    case "Core & More":
      "Targeted workout routine ";
    case "Cardio & Core":
    case "Step Express":
      return "Cardio with an extra touch";
    case "Spin":
      return "Total body, low impact cardio";
    case "HIIT & LIIT":
      return "Intensity, break, repeat";
    case "Total Body Circuit":
    case "Insanity Bootcamp":
    case "Power Shred":
      return "Full body workout";
    default:
      return null;
  }
};

export default function EventCard({
  eventDesc,
  eventEnd,
  eventHost,
  eventStart,
  eventTitle,
}: IEventCardProps) {
  const desc = getclassDescription(eventTitle.toString());
  console.log(desc);
  return (
    <div className="event-card blk-bg">
      <h1 className="event-title">{eventTitle}</h1>
      <h2 className="event-host">{eventHost}</h2>
      <div className="time-box">
        <h2 className="event-time">{eventStart}</h2>
        &nbsp;&nbsp;&ndash;&nbsp;&nbsp;
        <h2 className="event-time">{eventEnd}</h2>
      </div>
      {desc ? <h2 className="event-description">{desc}</h2> : null}
    </div>
  );
}
