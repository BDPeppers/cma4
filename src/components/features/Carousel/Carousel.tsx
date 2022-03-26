import { type } from 'os';
import * as React from 'react';

type slide = {
    quote: string
    // img: png type
}

export interface ICarouselProps {
    imgs: Array<string> //array of images
}

export default class Carousel extends React.Component<ICarouselProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
