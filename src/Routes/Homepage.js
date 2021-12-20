import React from "react";
import { Fragment } from "react/cjs/react.development";
import Banner from "../Components/Shared/Banner";
import Navbar from "../Components/Shared/Navbar";
import Choise from "../Components/Layout/Choise";
import Section1Homepage from "../Components/Layout/Section1Homepage";
import Section2Homepage from "../Components/Layout/Section2Homepage";
import Section3Homepage from "../Components/Layout/Section3Homepage";
import Section4Homepage from "../Components/Layout/Section4Homepage";
import Section5Hompage from "../Components/Layout/Section5Hompage";
import Section6Homepage from "../Components/Layout/Section6Homepage";
export default function Homepage() {
  return (
    <Fragment>
      <Banner />
      <Navbar />
      <Choise />
      <Section1Homepage/>
      <Section2Homepage/>
      <Section3Homepage/>
      <Section4Homepage/>
      <Section5Hompage/>
      <Section6Homepage/>
    </Fragment>
  );
}
