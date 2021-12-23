import React from "react";
import classes from "../../Assets/CSS/NavbaHid1.module.css";
export default function NavbaHid1() {
  return (
    <div className={classes.container}>
      <a href="/#" > <div className={classes.title}> 
      Learn</div></a>
     <div className={classes.container1}>

      <a href="/#">ABOUT US</a>
      <a href="/#">RECYCLING</a>
      </div>
    </div>
  );
}
