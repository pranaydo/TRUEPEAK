// import React, { useState } from "react";
// import luca1 from "../assets/testomonial1.png";
// import luca2 from "../assets/testomonial12.png";
// import james from "../assets/testomonial13.png";

// const testimonials = [
//   {
//     name: "Luca Moretti",
//     image: luca1,
//     quote:
//       "TruPeak helped me feel balanced, energized, and truly understood. It’s the first time PCOS care felt personal and effective.",
//   },
//   {
//     name: "Luca Moretti",
//     image: luca2,
//     quote: "TruPeak has transformed my routine. The guidance was exceptional.",
//   },
//   {
//     name: "James Walker",
//     image: james,
//     quote:
//       "I never knew personalized health could feel so empowering. Thanks to TruPeak!",
//   },
// ];

// const TestimonialSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="bg-white px-6 md:px-16 py-16">
//       <div className="flex flex-col md:flex-row items-start gap-10 relative">
//         {/* Left Side */}
//         <div className="md:w-1/2 relative">
//           <div className="text-[80px] text-[#E3D2A2] leading-[0.6] font-serif">
//             “
//           </div>
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#1D253C] leading-tight mb-6">
//             Our Expertise.
//             <br />
//             Your Edge.
//           </h2>
//           <div className="bg-[#B28C5A] text-white p-6 rounded-xl shadow-md text-base mt-4">
//             “{testimonials[activeIndex].quote}”
//           </div>
//         </div>

//         {/* Right Side: Images */}
//         <div className="flex gap-4 md:gap-6">
//           {testimonials.map((person, idx) => (
//             <div
//               key={idx}
//               onMouseEnter={() => setActiveIndex(idx)}
//               className="relative rounded-3xl cursor-pointer"
//               style={{ minWidth: 0 }}
//             >
//               <div className="p-1  rounded-3xl transition-all duration-300">
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className={`transition-all duration-300 object-cover rounded-3xl
//     ${
//       activeIndex === idx
//         ? "w-64 md:w-80 h-[350px] md:h-[400px] z-10"
//         : "w-48 md:w-64 h-[300px] md:h-[350px] hover:w-56 md:hover:w-72 hover:h-[350px] md:hover:h-[400px]"
//     }
//   `}
//                 />
//               </div>
//               <div className="absolute bottom-4 left-4 text-white font-medium text-lg md:text-xl">
//                 {person.name}
//               </div>
//               {activeIndex === idx && idx > 0 && (
//                 <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-[100px] text-[#E3D2A2] leading-none"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default TestimonialSection;

import React, { useState } from "react";
import luca1 from "../assets/testomonial1.png";
import luca2 from "../assets/testomonial12.png";
import james from "../assets/testomonial13.png";

const testimonials = [
  {
    name: "Luca Moretti",
    image: luca1,
    quote:
      "TruPeak helped me feel balanced, energized, and truly understood. It’s the first time PCOS care felt personal and effective.",
  },
  {
    name: "Luca Moretti",
    image: luca2,
    quote: "TruPeak has transformed my routine. The guidance was exceptional.",
  },
  {
    name: "James Walker",
    image: james,
    quote:
      "I never knew personalized health could feel so empowering. Thanks to TruPeak!",
  },
];

const quoteColor = "#E3D2A2";
const quoteBoxColor = "#B28C5A";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white px-4 md:px-20 py-16 overflow-x-hidden">
      {/* Large background quotes */}
      <svg
        className="absolute left-0 top-0 w-40 md:w-56 h-40 md:h-56 text-[#E3D2A2] z-0"
        viewBox="0 0 200 200"
        fill="none"
      >
        <text x="0" y="140" fontSize="80" fontFamily="serif" fill={quoteColor}>
          “
        </text>
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-32 md:w-48 h-32 md:h-48 text-[#E3D2A2] z-0"
        viewBox="0 0 200 200"
        fill="none"
      >
        <text x="0" y="180" fontSize="180" fontFamily="serif" fill={quoteColor}>
          ”
        </text>
      </svg>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center md:justify-start md:mt-16">
          <h2 className="text-3xl md:text-5xl font-semibold font-body text-[#1D253C] leading-tight mb-8">
            Our Expertise.
            <br />
            Your Edge.
          </h2>
          <div
            className="bg-[#B28C5A] text-[#1D253C] p-6 rounded-2xl shadow-md text-base md:text-lg mt-4 font-medium font-body max-w-2xl w-[133%] z-[100]"
            style={{ color: "#1D253C" }}
          >
            “{testimonials[activeIndex].quote}”
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-row gap-4 md:gap-8 items-end md:items-end">
          {testimonials.map((person, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative rounded-[36px] shadow-xl cursor-pointer transition-all duration-300 flex flex-col items-center
                ${activeIndex === idx ? "z-20 scale-105" : "z-10 scale-100"}
              `}
              style={{
                background: "#F7F6F2",
                minWidth: "220px",
                maxWidth: "320px",
                boxShadow:
                  activeIndex === idx
                    ? "0 8px 32px 0 rgba(178,140,90,0.18)"
                    : "0 4px 16px 0 rgba(178,140,90,0.10)",
              }}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-56 md:w-72 h-[340px] md:h-[420px]  object-cover rounded-[36px] transition-all duration-300"
                style={{
                  boxShadow:
                    activeIndex === idx
                      ? "0 8px 32px 0 rgba(178,140,90,0.18)"
                      : "0 4px 16px 0 rgba(178,140,90,0.10)",
                }}
              />
              {/* <div
                className={`absolute bottom-8 left-0 w-full text-center font-semibold text-xl md:text-2xl transition-all duration-300
                  ${activeIndex === idx ? "text-[#1D253C]" : "text-[#E3D2A2]"}
                `}
                style={{
                  textShadow:
                    activeIndex === idx
                      ? "0 2px 8px rgba(255,255,255,0.7)"
                      : "0 2px 8px rgba(178,140,90,0.2)",
                }}
              >
                {person.name}
              </div> */}
              {/* Only show the quote box overlay for the active card on mobile */}
              {activeIndex === idx && (
                <div className="block md:hidden absolute left-1/2 -bottom-20 transform -translate-x-1/2 w-[90%]">
                  <div className="bg-[#B28C5A] text-[#1D253C] p-4 rounded-xl shadow-md text-base font-medium">
                    “{person.quote}”
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Name below cards for desktop */}
      <div className="hidden md:flex justify-center mt-8">
        <span className="text-[#1D253C] text-2xl font-bold font-body">
          {testimonials[activeIndex].name}
        </span>
      </div>
    </section>
  );
};

export default TestimonialSection;
