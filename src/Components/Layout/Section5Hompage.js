import React from "react";
import background from "../../Assets/Images/background-image.webp"
import classes from "../../Assets/CSS/Section5Homepage.module.css"
import Text from "../Shared/Text";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Section5Hompage() {
    useEffect(() => {
        Aos.init({ duration: 500 });
      });
  const data = [
    {
      subtitle: "Ingredients",
      description:
        "Our products are formulated with safe, clean, responsibly sourced ingredients and research-backed methods that deliver on their promises. (We’d never leave you out to dry.)",
      anchor: "Learn More",
    },
    {
      subtitle: "Sustainability",
      description:
        "We love this planet and bet you do too. That’s why we’re dedicated to using eco-conscious materials and suppliers, recyclable packaging, and thoughtful shipping methods in our pursuit for a more sustainable world.",
      anchor: "Read our mision",
    },
    {
      subtitle: "Team",
      description:
        "We're a team of curious, passionate people, with big dreams of a happier, healthier world. Our mission is to empower you to spend time in nature in whatever way moves you—whether you're outdoorsy or more outdoors-ish. We're here to get you on your way.",
      anchor: "more on us",
    },
  ];
  return (
      <div className={classes.container}>
          <img data-aos="fade-up" className={classes.background} src={background}/>
    <div data-aos="fade-up" className={classes.text}>
      <div className={classes.title}>Made Safe for People + Planet™</div>
      {data.map((data)=>(<Text  title={data.subtitle} description={data.description} anchor={data.anchor}/>))}
    </div>
    </div>
  );
}
