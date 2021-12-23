import React, { Fragment } from 'react'
import insta_prev1 from "../../Assets/Images/insta_prev1.jpg";
import insta_prev2 from "../../Assets/Images/insta_prev2.jpg";
import insta_prev3 from "../../Assets/Images/insta_prev3.jpg";
import insta_prev4 from "../../Assets/Images/insta_prev4.jpg";
import insta_prev5 from "../../Assets/Images/insta_prev5.jpg";
import logo from '../../Assets/Images/logoo.png'
import gif from '../../Assets/Images/gif.gif'
import { useState } from 'react';
import classes from '../../Assets/CSS/EndPage.module.css'

export default function EndPage() {
    const [value, setValue] = useState('Enter your email  address')
    function Typing(e){
  setValue(e.target.value)
    }
    function ClickEventHandler(e){
      e.preventDefault()
    }
    return (
        <Fragment>
        <div className={classes.container1}>
        <div className="log">
        <img className={`${classes.logo} ${classes.logoo}`} src={logo}/>
        <img className={classes.logo} src={gif} />
    </div>
    <form>
    <input type='text' value={value} onInput={(e)=>{Typing(e)}}/>
    <button type="submit" onClick={(e)=>{ClickEventHandler(e)}}>Join Our List</button>
    </form>
    </div>
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
     
      </Fragment>
    )
}
