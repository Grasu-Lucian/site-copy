import React from "react";
import classes from "../../Assets/CSS/Section6Homepage.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Section6Homepage() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div data-aos="fade-up" className={classes.background}>
      <div className={classes.text}>
        Get that Out of Office feeling with our newest merch.
      </div>
      <button>Shop Merch</button>
    </div>
  );
}
