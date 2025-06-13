import React from "react";
import forbes from "../assets/partnerslogo/1.png";
import ndtv from "../assets/partnerslogo/2.png";
import indiatoday from "../assets/partnerslogo/3.png";
import wellgood from "../assets/partnerslogo/4.png";
import businessinsider from "../assets/partnerslogo/5.png";

const logos = [
  { src: forbes, alt: "Forbes" },
  { src: ndtv, alt: "NDTV" },
  { src: indiatoday, alt: "India Today" },
  { src: wellgood, alt: "Well+Good" },
  { src: businessinsider, alt: "Business Insider" },
];

const SeenInSection = () => (
  <section className="w-full bg-white py-40 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-12 animate-marquee">
        {logos.concat(logos).map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain grayscale opacity-80"
          />
        ))}
      </div>
    </div>
  </section>
);

export default SeenInSection;
