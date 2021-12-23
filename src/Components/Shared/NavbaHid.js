import React from "react";
import salt_cream from "../../Assets/Images/moreSalt.webp";
import cream1 from "../../Assets/Images/cream1.webp";
import cream2 from "../../Assets/Images/moreCream.webp";
import salt from "../../Assets/Images/sallt.jpg";
import perfume from "../../Assets/Images/perfume1.jpg";
import woman from "../../Assets/Images/woman.jpg";
import perfume1 from "../../Assets/Images/perfume2.jpg";
import woman1 from "../../Assets/Images/woman1.jpg";
import perfume2 from "../../Assets/Images/perfume3.jpg";
import woman2 from "../../Assets/Images/woman2.jpg";
import Itemss from "./Itemss";
import classes from '../../Assets/CSS/Navbarhid.module.css'
export default function NavbaHid() {
  const data = [
    {
      perfume: salt_cream,
      woman: salt,
      text: "Recovery Salts",
      subtext: "Mineral Bath Soak",
    },
    {
      perfume: cream2,
      woman: cream1,
      text: "S.O.S. Rescue Mask",
      subtext: "Hydrating Overnight Cream",
    },
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
  return (
    <div className={classes.container}>
      <div className={classes.anchor}>
        <div className={classes.title}>Shop</div>
        <a href="/#">Best Sellers</a>
        <a href="/#">Products</a>
        <a href="/#">Bundle + Save</a>
        <a href="/#">Merch</a>
        <a href="/#">All</a>
      </div>
      <div className={classes.products}>
        {data.map((perf,anc)=>(<Itemss  key={anc}
            images={[perf.perfume, perf.woman]}
            text={[perf.text, perf.subtext]}/>))}
      </div>
    </div>
  );
}
