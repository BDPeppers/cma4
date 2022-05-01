import * as React from "react";
import Image from "next/image";

export class ServiceCardData {
  constructor(
    public title: string,
    public description: string,
    public img: any
  ) {}
}

const keywords = ["Bootcamp", ""];
// const classDescription = (classTitle) => {};

// //rip and ride - 30min of Power Shred + 30min of Spin
// //zumba/funk fusion - aerobic fitness/interval training through dance
// //Yoga - guided practice to increase awareness and mindfulness of the breath and body
// //Kickboxing - combo of martial arts and fast-paced cardio
// //Total Body Circuit - ask
// //Booty Blast - ask
//Insanity Bootcamp

export interface IServiceCardProps {
  data: ServiceCardData;
}

export default function ServiceCard(props: IServiceCardProps) {
  let cma = false;
  var title = props.data.title;
  if (props.data.title.includes("CMA")) {
    cma = true;
    title = props.data.title.slice(4);
  }
  return (
    <div className="cma-service-card">
      <div className="service-header">
        <h1 className="header">
          {cma ? <span className="header">CMA </span> : null}
          {title}
        </h1>
      </div>
      <div className="service-img-box">
        <Image src={props.data.img} alt={props.data.title} />
      </div>

      <div className="service-description">
        <h2>{props.data.description}</h2>
      </div>
    </div>
  );
}
