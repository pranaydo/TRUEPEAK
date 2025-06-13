import React, { useState } from "react";

const steps = [
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
  {
    desc: "High-precision devices that measure fat, muscle, water levels, and metabolism using bioelectrical impedance and DEXA-level accuracy.",
  },
];

const ScienceBehindServices = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#e1c78f] rounded-[56px] max-w-6xl mx-auto my-16 px-8 py-12 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h2 className="text-primary font-heading font-bold text-3xl md:text-5xl mb-4">
            The Science Behind <br /> Our Services
          </h2>
          <button className="float-right md:float-none bg-white border-4 border-[#6b5b36] text-[#6b5b36] font-semibold px-8 py-2 rounded-full text-xl mb-8 md:mb-0 hover:bg-[#f5e7c6] transition">
            Know More
          </button>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8">
          <p className="text-primary text-lg md:text-xl font-body">
            TruPeak Health integrates cutting-edge medical and wellness
            technologies that are designed to{" "}
            <span className="text-[#2c886a] font-semibold">
              deliver accurate diagnostics, optimized therapies, and measurable
              outcomes.
            </span>
          </p>
        </div>
      </div>
      {/* Timeline/Stepper */}
      <div className="mt-16">
        <div className="flex items-center justify-between relative">
          {/* Navigation Arrows */}
          <button
            className="text-3xl text-primary mr-4"
            onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
            disabled={active === 0}
          >
            &lt;
          </button>
          <div className="flex-1 flex items-center">
            {/* Timeline Line */}
            <div className="w-full h-1 bg-[#bda86a] absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0" />
            {/* Steps */}
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`relative z-10 flex flex-col items-center flex-1`}
              >
                <div
                  className={`w-10 h-10 rounded-full border-4 ${
                    idx === active
                      ? "bg-[#5fa48c] border-[#5fa48c]"
                      : "bg-[#bda86a] border-[#bda86a] opacity-70"
                  } flex items-center justify-center`}
                >
                  <span className="w-4 h-4 bg-[#bda86a] rounded-full block opacity-50"></span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="text-3xl text-primary ml-4"
            onClick={() =>
              setActive((prev) => Math.min(prev + 1, steps.length - 1))
            }
            disabled={active === steps.length - 1}
          >
            &gt;
          </button>
        </div>
        {/* Step Descriptions */}
        <div className="flex justify-between mt-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex-1 text-center text-primary text-base md:text-lg font-body transition-opacity duration-300 ${
                idx === active ? "opacity-100" : "opacity-50"
              }`}
            >
              {step.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceBehindServices;
