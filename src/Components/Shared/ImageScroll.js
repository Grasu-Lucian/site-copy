import React from "react";
import classes from "../../Assets/CSS/ImageScroll.module.css";
export default function ImageScroll(props) {
  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <img className={classes.image_space} src={props.image} />
      </div>
        <div className={classes.text} >{props.text}</div>
    </div>
  );
}
