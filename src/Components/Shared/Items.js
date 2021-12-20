import React from "react";
import classes from "../../Assets/CSS/Items.module.css"
import { useEffect } from "react";

import Aos from "aos";
import 'aos/dist/aos.css';
export default function Items(props) {
    useEffect(() => {
        
        Aos.init({duration:500})
    }, )
  return <div  data-aos='fade-up'>
      <div className={classes.cont}>
      <img className={classes.panel} src={props.images[0]}/>
      <img className={classes.panel1} src={props.images[1]}/>
      </div>
      <div className={classes.text}>{props.text[0]}</div>
      <div className={classes.subtext}>{props.text[1]}</div>
  </div>;
}
