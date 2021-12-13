import React from "react";
import { Fragment } from "react/cjs/react.development";
import Banner from "../Components/Shared/Banner";
import Navbar from "../Components/Shared/Navbar";
import Cream from '../Assets/Images/Cream.jpg'
import classes from "../Assets/CSS/Homepage.module.css";
export default function Homepage() {
  return (
    <Fragment>
      <Banner/>
      <Navbar/>
      <img src={Cream} className={classes.homepage_image}/>
    </Fragment>
  );
}
