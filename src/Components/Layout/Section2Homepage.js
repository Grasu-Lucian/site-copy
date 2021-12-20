import React from "react";
import { useState } from "react";
import classes from "../../Assets/CSS/Section2Homepage.module.css";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
export default function Section2Homepage() {
  const reviews = [
    "Kinfield repels thirsty insects with an effective all-natural blend",
    "Bottom line:I'll be getting it in bulk",
    "This new brand is for everyone who loves the outdoors, clean beuty, and great packaging.",
    "A DEET-free insect repellent that promises not only to deter critters but also to refresh tired summer skins",
    "I'm officially a Kinfield converter ",
    "We tested it all last summer and... didn't get bitten once",
    "This is definetely not Off! and that's exactly what makes us want to put it on",
    "At once both clean AND cute",
    "Golden Hour works perfectly in Brooklyn's buggiest backyards",
  ];
  const clients = [
    "Outside",
    "REFINERY29",
    "POPSUGAR",
    "The New York Times",
    "BUSTLE",
    "goop",
    "New York",
    "BIRDIE",
    "NYLON",
  ];
  const [counter, setCounter] = useState(0);
  function AddCounter() {
    if (counter < reviews.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }
  function ReduceCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(reviews.length - 1);
    }
  }
  
  useEffect(() => {
        
    Aos.init({duration:500})
}, )
  return (
    <div data-aos='fade-up' className={classes.container}>
      <button
        onClick={() => {
          ReduceCounter();
        }}
      >
        {"<"}
      </button>
      <div   className={classes.reviews} >
        <div className={classes.comment} >{`"${reviews[counter]}"`}</div>
        <div className={classes.counter}>{`${clients[counter]}`}</div>
      </div>
      <button
        onClick={() => {
          AddCounter();
        }}
      >
        {">"}
      </button>
    </div>
  );
}
