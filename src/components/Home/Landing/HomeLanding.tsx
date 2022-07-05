import * as React from "react";
import DesktopHomeLanding from "./Desktop/DesktopHomeLanding";
import MobileHomeLanding from "./Mobile/MobileHomeLanding";

export default function HomeLanding() {
  return (
    <div>
      <DesktopHomeLanding />
      <MobileHomeLanding />
    </div>
  );
}
