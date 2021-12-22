import React from "react";

import { FaInstagram } from "react-icons/fa";
import classes from "../../Assets/CSS/ImageDisplayer.module.css";
export default function ImageDisplayer(props) {
  
  return (
    <a href={props.URL} className={classes.container}>
      <FaInstagram className={classes.icon} />
      <img className={classes.photo} src={props.image} />
    </a>
  );
}
