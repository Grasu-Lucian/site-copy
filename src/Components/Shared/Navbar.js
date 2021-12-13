import React from "react";
import { useState } from "react";
import classes from "../../Assets/CSS/Navbar.module.css";
export default function Navbar() {
function  handleScroll(){
    
  }
 
  const [nav, setNav] = useState([])
  return (
    <div className={classes.navbar} onScroll={()=>{handleScroll()}} style={nav} style={{overflowY: 'auto'}}>
      <div className={classes.shop_learn}>
        <a href="/#">shop</a>
        <a href="/#">learn</a>
      </div>
      <div className={classes.kinfield}>
      <a href="/#" >kinfield</a>
      </div>
      <div className={classes.shop_learn}>
        <a href="/#" className={classes.a}>
          my<span>/</span>account
        </a>
        <a href="/#">
          cart<span>/</span>0
        </a>
      </div>
    </div>
  );
}
