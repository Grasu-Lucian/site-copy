import React from "react";
import { Fragment } from "react/cjs/react.development";
import Banner from "../Components/Shared/Banner";
import Navbar from "../Components/Shared/Navbar";
import Choise from "../Components/Layout/Choise";
import Section1Homepage from "../Components/Layout/Section1Homepage";
export default function Homepage() {
  return (
    <Fragment>
      <Banner />
      <Navbar />
      <Choise />
      <Section1Homepage/>
    </Fragment>
  );
}
