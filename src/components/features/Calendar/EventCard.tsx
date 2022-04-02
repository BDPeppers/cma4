import * as React from 'react';

export interface IEventCardProps {
    eventTitle: string,
    eventHost: string,
    eventTime: string,
    eventdesc: string
}

export default function EventCard (props: IEventCardProps) {
  return (
    <div className='event-card'>
      <h1 className='event-title'></h1>
      <h2 className='event-host'></h2>
      <h2 className='event-time'></h2>
      <h2 className='event-description'></h2>
    </div>
  );
}
