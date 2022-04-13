import { title } from "process";
import * as React from "react";

export class ServiceCardData {
  constructor(
    public title: string,
    public description: string,
    public img: any
  ) {}
}

export interface IServiceCardProps {
  data: ServiceCardData;
}

export default function ServiceCard(props: IServiceCardProps) {
  let cma = false;
  var title = "";
  if (props.data.title.includes("CMA")) {
    cma = true;
    title = props.data.title.slice(4);
  }
  return (
    <div className="cma-service-card">
      <div className="service-img-box"></div>
      <div className="service-header">
        <h1 className="header">
          {cma ? <span>CMA </span> : null}
          {title}
        </h1>
      </div>
      <div className="service-description">{props.data.description}</div>
    </div>
  );
}
