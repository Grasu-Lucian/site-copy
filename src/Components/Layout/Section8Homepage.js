import React from "react";
import classes from '../../Assets/CSS/Section8Homepage.module.css'
export default function Section8Homepage() {
  return (
    <div className={classes.container}>
      <div className={classes.tittle}>
        Powered By Plants,
        <br /> Backed By Science,
        <br /> Recreation Ready
      </div>
      <div className={classes.subcontainer}>
        <div className={classes.title1}>
          Come say hi!
          <br /><span>— hello@kinfield.com</span>
        </div>
        <a href="/#">Shop</a>
        <a href="/#">FAQs</a>
        <a href="/#">Stockists</a>
        <a href="/#">About</a>
        <a href="/#">Press</a>
        <a href="/#">Careers</a>
        <a href="/#">Contact</a>
        <a href="/#">Do not sell my personal </a>
        <a href="/#">information</a>
      </div>
    </div>
  );
}
