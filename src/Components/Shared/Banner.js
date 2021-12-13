import React from "react";
import classes from "../../Assets/CSS/Banner.module.css";
export default function Banner() {
  return (
    <div className={classes.container}>
      <a href="/#" className={classes.banner} className={classes.a}>
        🎁 This Weekend Only: Free Gift Kit and Free Shipping on Orders $35+! 🎁{" "}
        <br />
        Add to any order and use code 'GIFTKIT'
      </a>
    </div>
  );
}
