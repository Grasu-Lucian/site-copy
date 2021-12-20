import React from "react";
import classes from "../../Assets/CSS/Section3Homepage.module.css";
import Items from "../Shared/Items";
import perfume from "../../Assets/Images/perfume1.jpg";
import woman from "../../Assets/Images/woman.jpg";
import perfume1 from "../../Assets/Images/perfume2.jpg";
import woman1 from "../../Assets/Images/woman1.jpg";
import perfume2 from "../../Assets/Images/perfume3.jpg";
import woman2 from "../../Assets/Images/woman2.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Section3Homepage() {
  const data = [
    {
      perfume: perfume,
      woman: woman,
      text: "Golden Hour™",
      subtext: "DEET-Free Repellent",
    },
    {
      perfume: perfume1,
      woman: woman1,
      text: "Daily Dew SPF 35",
      subtext: "Water-Resistant Sunscreen",
    },
    {
      perfume: perfume2,
      woman: woman2,
      text: "Relief Balm",
      subtext: "Anti-Itch Remedy",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className={classes.container}>
      <div data-aos="fade-up" className={classes.title}>
        From Trailblazing to Stargazing
      </div>
      <div data-aos="fade-up" className={classes.subtitle}>
        Don’t forget to bring these.
      </div>
      <div className={classes.shopping}>
        {data.map((perf, anc) => (
          <Items key={anc}
            images={[perf.perfume, perf.woman]}
            text={[perf.text, perf.subtext]}
          />
        ))}
      </div>
      <a data-aos="fade-up" className={classes.textt} href="/#">
        Get the goods
      </a>
    </div>
  );
}
