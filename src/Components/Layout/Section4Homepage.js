import React from "react";
import boots from "../../Assets/Images/boots.png";
import cookie from "../../Assets/Images/cookie.png";
import wemen from "../../Assets/Images/wemen.jpg";
import no_idea from "../../Assets/Images/no_idea.jpg";
import box from "../../Assets/Images/box.jpg";
import classes from "../../Assets/CSS/Section4Homepage.module.css";
import ImageScroll from "../Shared/ImageScroll";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Section4Homepage() {
  const data = [
    { image: boots, text: "Field Tested:Hiking Boots" },
    { image: cookie, text: "Gitf Guide:For The Backcountry Explorer" },
    {
      image: wemen,
      text: "For Her Sister:Founder Picks with Nichole Powell of Kinfield",
    },
    {
      image: no_idea,
      text: "A Guide to Base Layers(An Why You Need Them in Winter) ",
    },
    {
      image: box,
      text: "What Makes Packaging 'Sustainable'",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  const [counter, setCounter] = useState(0);

  function toTheRight() {
    if (counter < 800) {
      setCounter(counter + 800);
    } else if (counter === 800) {
      setCounter(counter + 400);
    } else if (counter > 800) {
      setCounter(counter);
    }
  }
  function toTheLeft() {
    if (counter < 400) {
      setCounter(counter);
    } else if (counter === 400) {
      setCounter(counter - 400);
    } else if (counter <= 11200) {
      setCounter(counter - 800);
    }
  }

  return (
    <div  className={classes.container}>
      <div data-aos="fade-up" className={classes.info}>
        <div className={classes.title}>Outdoors-ish</div>
        <div className={classes.description}>
          Read on for our favorite hiking spots, camp recipes, How to Outdoors
          101, and adventure guides.
        </div>
        <a href="/#" className={classes.blog}>Read the Blog</a>
      </div>
      <div data-aos="fade-up" className={classes.more_articles}>
        <button
          onClick={() => {
            toTheLeft();
          }}
        >
          {"<"}
        </button>
        <div
          className={classes.more_articles1}
          style={{
            marginLeft: `-${counter}px`,
            transition: "ease-in-out 0.5s",
          }}
        >
          {data.map((data,anc) => (
            <ImageScroll key={anc} image={data.image} text={data.text} />
          ))}
        </div>
        <button
          onClick={() => {
            toTheRight();
          }}
          className={classes.second}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
