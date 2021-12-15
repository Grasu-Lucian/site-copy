import React from "react";
import { Fragment } from "react/cjs/react.development";
import Cream from "../../Assets/Images/Cream.jpg";
import Salt from "../../Assets/Images/salt.jpg";
import classes from "../../Assets/CSS/Choise.module.css";
import { useEffect } from "react";
import { useState } from "react";
export default function Choise() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (display === true) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Fragment>
      {display ? (
        <img src={Cream} className={classes.homepage_image} />
      ) : (
        <img src={Salt} className={classes.homepage_image} />
      )}
      {display ? (
        <div className={classes.container}>
          <div className={classes.title}>
            <button
              onClick={() => {
                setDisplay(false);
              }}
            ></button>
            Going <br /> somewhere?&lrm;
          </div>
          <div className={classes.description}>
            <button></button>
            From bugs to sun--we've got you covered <br />
            with travel-ready essential
          </div>
          <button>
            <a>Shop bestsellers</a>
          </button>
        </div>
      ) : (
        <div className={classes.container1}>
          <div className={classes.title1}>
            <button
              onClick={() => {
                setDisplay(true);
              }}
            ></button>
            Made for aprés.&lrm;{" "}
          </div>
          <div className={classes.description1}>
            <button></button> Meet the bath soak of your dream
          </div>
          <button>
            <a>Shop salts</a>
          </button>
        </div>
      )}
    </Fragment>
  );
}
