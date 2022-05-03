import * as React from "react";
import AboutLanding from "../../src/components/About/Landing/AboutLanding";
import MailingList from "../../src/components/features/MailingList/MailingList";
import Services from "../../src/components/About/Services/Services";

export default function About() {
  return (
    <div>
      <AboutLanding />
      <Services />
      <MailingList />
    </div>
  );
}
