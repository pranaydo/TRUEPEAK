import React from "react";
import DownArrow from "../utils/svg/DownArrow";

const logos = [
  { alt: "Forbes" },
  { alt: "NDTV" },
  { alt: "India Today" },
  { alt: "Well+Good" },
  { alt: "Business Insider" },
];

const RunningText = () => (
  <section className="w-full bg-white py-40 overflow-hidden">
    <div className="relative">
      <div className="logo-marquee flex items-center gap-12 animate-marquee">
        {logos.concat(logos).map((logo, idx) => (
          <DownArrow />
          //   <img
          //     key={idx}
          //     src={logo.src}
          //     alt={logo.alt}
          //     className="h-10 w-auto object-contain grayscale opacity-80"
          //   />
        ))}
      </div>
    </div>
  </section>
);

export default RunningText;
