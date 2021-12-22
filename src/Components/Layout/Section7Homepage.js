import React from "react";
import classes from "../../Assets/CSS/Section7Homepage.module.css";
import ImageDisplayer from "../Shared/ImageDisplayer";
import { useState } from "react";
import insta_prev1 from "../../Assets/Images/insta_prev1.jpg";
import insta_prev2 from "../../Assets/Images/insta_prev2.jpg";
import insta_prev3 from "../../Assets/Images/insta_prev3.jpg";
import insta_prev4 from "../../Assets/Images/insta_prev4.jpg";
import insta_prev5 from "../../Assets/Images/insta_prev5.jpg";
import logo from '../../Assets/Images/logoo.png'
import gif from '../../Assets/Images/gif.gif'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const data = [
  { image: insta_prev1, URL: "https://www.instagram.com/p/CXwsqvdBEQ5/" },
  { image: insta_prev2, URL: "https://www.instagram.com/p/CXuVmwChKeF/" },
  { image: insta_prev3, URL: "https://www.instagram.com/p/CXmL7b8B3Hd/" },
  { image: insta_prev4, URL: "https://www.instagram.com/p/CXjnEaVB7Ii/" },
  { image: insta_prev5, URL: "https://www.instagram.com/p/CXhdt_ahn7B/" },
];
export default function Section7Homepage() {
  const [value, setValue] = useState('Enter your email  address')
  function Typing(e){
setValue(e.target.value)
  }
  function ClickEventHandler(e){
    e.preventDefault()
  }
    useEffect(() => {
        Aos.init({ duration: 500 });
      });
  return (
    <div className={classes.container}>
      <div data-aos="fade-up" className={classes.title}>Let's Hang</div>
      <div data-aos="fade-up" className={classes.subtitle}>We do fun things on Instagram.</div>
      <a  data-aos="fade-up" className={classes.Knifield} href="/#">@KINFIELD</a>
      <div data-aos="fade-up" className={classes.gallery}>
        {data.map((data, anc) => (
          <ImageDisplayer key={anc} image={data.image} URL={data.URL} />
        ))}
      </div>
      <div className="log">
          <img className={`${classes.logo} ${classes.logoo}`} src={logo}/>
          <img className={classes.logo} src={gif} />
      </div>
      <form>
      <input type='text' value={value} onInput={(e)=>{Typing(e)}}/>
      <button type="submit" onClick={(e)=>{ClickEventHandler(e)}}>Join Our List</button>
      </form>
    </div>
  );
}
