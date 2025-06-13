import React, { useState } from "react";
import luca1 from "../assets/Doctor.jpg";
import luca2 from "../assets/Doctor.jpg";
import james from "../assets/Doctor.jpg";

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

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-6 md:px-16 py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative">
        {/* Left Side */}
        <div className="md:w-1/2 relative">
          <div className="text-[80px] text-[#E3D2A2] leading-[0.6] font-serif">
            “
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1D253C] leading-tight mb-6">
            Our Expertise.
            <br />
            Your Edge.
          </h2>
          <div className="bg-[#B28C5A] text-white p-6 rounded-xl max-w-sm shadow-md text-base">
            “{testimonials[activeIndex].quote}”
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="flex gap-4 md:gap-6">
          {testimonials.map((person, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`relative overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-transform duration-300 ${
                activeIndex === idx ? "scale-110" : "scale-100"
              }`}
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 md:w-48 h-[300px] object-cover rounded-3xl"
              />
              <div className="absolute bottom-4 left-4 text-white font-medium text-lg md:text-xl">
                {person.name}
              </div>
              {activeIndex === idx && idx > 0 && (
                <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-[100px] text-[#E3D2A2] leading-none">
                  ”
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
