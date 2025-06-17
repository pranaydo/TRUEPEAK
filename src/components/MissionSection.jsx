import React from "react";
import doctorImg from "../assets/Doctor.jpg";
import CountUp from "react-countup";

const MissionSection = () => (
  <section className="w-full bg-[#e1c78f] min-h-[80vh] rounded-[3rem] flex flex-col md:flex-row items-center justify-center relative overflow-visible py-1 sm:py-2 md:py-3 ">
    {/* Left: Text Content */}
    <div className="flex-1 flex flex-col justify-center items-start md:items-start lg:pl-32 space-y-10">
      <p className="font-body text-primary text-base sm:text-lg md:text-xl font-semibold max-w-2xl text-left mx-auto md:mx-0">
        Our mission is to empower every individual to reach their true
        potential—physically, mentally, and emotionally. We’re committed to
        transforming lives by delivering{" "}
        <span className="text-[#2c886a] font-semibold">
          science-backed, personalized health solutions that go beyond symptoms
        </span>{" "}
        to ignite lasting change. Through compassionate care, innovation, and
        community, we help you take charge of your health journey and rise to
        your peak—every single day.
      </p>

      {/* Stats Card */}
      <div className="relative w-[95vw] max-w-[1100px] bg-[#ffffff73] backdrop-blur-[30px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[2rem] px-8 py-8 mt-4 flex flex-col -mr-16 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1a2233] mb-2">
              <CountUp end={38} duration={2.5} />+
            </div>
            <div className="text-lg md:text-xl text-[#1a2233] font-medium text-center leading-tight">
              Accuracy Rate
              <br />
              in diagnostics
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1a2233] mb-2">
              <CountUp end={15} duration={2} />+
            </div>
            <div className="text-lg md:text-xl text-[#1a2233] font-medium text-center leading-tight">
              Years of
              <br />
              Experience
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1a2233] mb-2">
              <CountUp end={13} duration={3} separator="," />
              K+
            </div>
            <div className="text-lg md:text-xl text-[#1a2233] font-medium text-center leading-tight">
              Satisfied
              <br />
              Customers
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-bold text-[#1a2233] mb-2">
              <CountUp end={38} duration={2.5} />+
            </div>
            <div className="text-lg md:text-xl text-[#1a2233] font-medium text-center leading-tight">
              Countries in
              <br />
              Services
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right: Image */}
    <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0 z-10">
      <div className="w-full   flex justify-center items-center">
        <div className="  flex justify-center items-center">
          <img
            src={doctorImg}
            alt="Doctor"
            className="rounded-[3rem]  object-cover relative z-10 right-[80px]h-[36rem] w-[36rem] right-[80px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MissionSection;
