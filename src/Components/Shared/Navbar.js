import React from "react";
import { useState } from "react";
import logo from "../../Assets/Images/logo.webp"
import classes from "../../Assets/CSS/Navbar.module.css";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  function handleScroll(e) {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    console.log('e')  
  }}

const  ChangeBackground=()=>{
if(window.scrollY>=80){setNavbar(true)}
else{setNavbar(false)}

}
window.addEventListener('scroll',ChangeBackground)
 
  return (
    <div
      className={navbar?(`${classes.navbar}`):(`${classes.navbar} ${classes.active}`)}
      onScroll={() => {
        handleScroll();
      }}
     
      style={{ overflowY: "auto", overflowX: "hidden" }}
    >
      <div className={classes.shop_learn}>
        <a href="/#">shop </a>
        <a href="/#">learn</a>
      </div>
      <div className={classes.kinfield}>
        <a href="/#">{navbar?(<img className={classes.size}src={logo}/>):('kinfield')}</a>
      </div>
      <div className={classes.shop_learn}>
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
