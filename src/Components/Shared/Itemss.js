import React from "react";
import classes from '../../Assets/CSS/Itemss.module.css'
export default function Itemss(props) {
  return (
    <div className={classes.container1}>
      <div className={classes.container}>
        <img className={classes.looks} src={props.images[0]} />
        <img className={`${classes.looks1}`} src={props.images[1]} />
      </div>
      <div className={classes.title}>
      <div>{props.text[0]}</div>
      <div className={classes.subtitle}>{props.text[1]}</div>
      </div>
    </div>
  );
}
