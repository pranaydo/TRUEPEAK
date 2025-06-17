import React from "react";
import doctorImg from "../assets/Doctor.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MissionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-[#e1c78f] min-h-[80vh] rounded-[3rem] flex flex-col md:flex-row items-center justify-between relative overflow-visible py-12 px-8 md:px-24 font-body"
    >
      {/* Left: Text Content */}
      <div className="flex-1 max-w-[50%] z-20 space-y-10">
        <p className="font-body text-primary text-base sm:text-lg md:text-xl font-semibold max-w-2xl text-left font-body">
          Our mission is to empower every individual to reach their true
          potential—physically, mentally, and emotionally. We’re committed to
          transforming lives by delivering{" "}
          <span className="text-[#2c886a] font-semibold">
            science-backed, personalized health solutions that go beyond
            symptoms
          </span>{" "}
          to ignite lasting change. Through compassionate care, innovation, and
          community, we help you take charge of your health journey and rise to
          your peak—every single day.
        </p>

        {/* Stats Card */}
        <div className="relative w-[95vw] max-w-[1100px] bg-[#ffffff73] backdrop-blur-[30px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[2rem] px-8 py-8 mt-4 flex flex-col -mr-16 z-20 font-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
            {[
              ["Accuracy Rate", "in diagnostics", 38],
              ["Years of", "Experience", 15],
              ["Satisfied", "Customers", 13, "K+"],
              ["Countries in", "Services", 38],
            ].map(([line1, line2, end, suffix], idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold font-body text-gray-500 mb-2">
                  {inView && <CountUp end={end} duration={2.5} separator="," />}
                  {suffix || "+"}
                </div>
                <div className="text-lg md:text-xl text-[#1a2233] font-medium  font-body text-center leading-tight">
                  {line1} <br /> {line2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Overlapping Large Image */}
      <div className="flex-1 relative hidden md:flex justify-end items-center">
        <img
          src={doctorImg}
          alt="Doctor"
          className="absolute right-[-80px] top-1/2 -translate-y-1/2 h-[33rem] w-[27rem] object-cover rounded-[3rem] z-10 right-[20px]"
        />
      </div>
    </section>
  );
};

export default MissionSection;
