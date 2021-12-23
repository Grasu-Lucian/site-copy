import React from "react";
import { useState } from "react";
import logo from "../../Assets/Images/logo.webp";
import classes from "../../Assets/CSS/Navbar.module.css";
import NavbaHid from "./NavbaHid";
import NavbaHid1 from "./NavbaHid1";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function handleScroll(e) {
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log("e");
    }
  }

  const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);

  return (
    <div
      className={
        navbar ? `${classes.navbar}` : `${classes.navbar} ${classes.active}`
      }
      onScroll={() => {
        handleScroll();
      }}
    >
      <div className={classes.shop_learn}>
        <div className={classes.shop}>
          <a href="/#" >shop </a>
          <div className={classes.hid}>
            <NavbaHid />
          </div>
        </div>
        <div className={classes.learn}>
          <a href="/#" >learn</a>
          <div className={classes.hid}>
            <NavbaHid1 />
          </div>
        </div>
      </div>
      <div className={classes.kinfield}>
        <a href="/#">
          {navbar ? <img className={classes.size} src={logo} /> : "kinfield"}
        </a>
      </div>
      <div className={classes.settings}>
        <a href="/#" className={classes.a}>
          my<span>/</span>account
        </a>
        <a href="/#" className={classes.last}>
          cart<span>/</span>0
        </a>
      </div>
    </div>
  );
}
