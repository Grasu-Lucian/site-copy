import React from "react";
import { Fragment } from "react/cjs/react.development";
import Cream from "../../Assets/Images/Cream.jpg";
import classes from "../../Assets/CSS/Choise.module.css";
export default function Choise() {
  return (
    <Fragment>
      <img src={Cream} className={classes.homepage_image} />
      <div className={classes.container}>
        <div className={classes.title}>
          Going <br /> somewhere?&lrm;
        </div>
        <div className={classes.description}>
          From bugs to sun--we've got you covered <br />
          with travel-ready essential
        </div>
        <button>
          <a>Shop bestsellers</a>
        </button>
      </div>
    </Fragment>
  );
}
