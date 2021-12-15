import React from "react";
import picture from "../../Assets/Images/Woman_and_man.webp";
import picture1 from "../../Assets/Images/perfume.webp";
import classes from "../../Assets/CSS/Section1Homepage.module.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Section1Homepage() {

    useEffect(() => {
        
        Aos.init({duration:500})
    }, )
    return (
        <div className={classes.bigcontainer}>
      <div   className={classes.container}>
        <div data-aos='fade-up'  className={classes.text}>
          Powered By Plants,
          <br /> Backed By Science,
          <br /> Recreation Ready
        </div>
        <img src={picture} data-aos='fade-up'  className={classes.picture} />
      </div>
      <div   className={classes.text1} >
        <img src={picture1} data-aos='fade-up' className={classes.picture} />
        <div data-aos='fade-up'  className={classes.text2}>
          From park picnics to weekends upstate—we make clean, effective
          products that are here for all your outdoor adventures. And the best
          part? They actually work.
        </div>
      </div>
    </div>
  );
}

