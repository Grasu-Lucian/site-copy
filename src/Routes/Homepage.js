import React from "react";
import { Fragment } from "react/cjs/react.development";
import Banner from "../Components/Shared/Banner";
import Navbar from "../Components/Shared/Navbar";
import Choise from "../Components/Layout/Choise";
export default function Homepage() {
  return (
    <Fragment>
      <Banner />
      <Navbar />
      <Choise />
    </Fragment>
  );
}
