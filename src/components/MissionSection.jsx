import React from "react";
import doctorImg from "../assets/Doctor.jpg";
import CountUp from "react-countup";

const MissionSection = () => (
  <section className="w-full bg-[#e1c78f] rounded-[3rem] flex flex-col md:flex-row items-stretch relative overflow-visible py-6 sm:py-8 md:py-10">
  
  {/* Left: Text Content */}
  <div className="flex-1 flex flex-col justify-center  lg:pl-32 space-y-5">
    <p className="font-body text-primary text-base sm:text-lg md:text-xl font-semibold max-w-2xl text-center md:text-left mx-auto md:mx-0">
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

    {/* Stats Grid */}
    <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-center md:text-left">
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          <CountUp end={15} duration={2} />+
        </div>
        <div className="text-sm sm:text-base text-primary mt-1">Years of Experience</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          <CountUp end={38} duration={2.5} />+
        </div>
        <div className="text-sm sm:text-base text-primary mt-1">Countries in Services</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          <CountUp end={98} duration={2.8} />%
        </div>
        <div className="text-sm sm:text-base text-primary mt-1">Accuracy Rate in diagnostics</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          <CountUp end={13000} duration={3} separator="," />+
        </div>
        <div className="text-sm sm:text-base text-primary mt-1">Satisfied Customers</div>
      </div>
    </div>
  </div>

  {/* Right: Image */}
  <div className="flex-1 flex  md:justify-start relative mt-20 sm:mt-10 md:mt-20 lg:mt-20">
 <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-10 w-full max-w-sm sm:max-w-md z-10">
    <div className="relative w-3/4 min-h-[10rem] sm:min-h-[12rem] lg:min-h-[24rem]">
      <img
        src={doctorImg}
        alt="Doctor"
        className="rounded-[3rem] w-full h-full object-cover relative z-10"
      />

      {/* Top right overlay */}
      <div className="absolute top-0 right-0 w-60 h-40 bg-white/70 rounded-2xl shadow-xl z-20 backdrop-blur-md hidden sm:block transform translate-x-1/2 -translate-y-1/2" />


      {/* Bottom left overlay */}
      <div className="absolute bottom-2 left-0 w-60 h-40 bg-white/70 rounded-2xl shadow-xl z-20 backdrop-blur-md hidden sm:block transform -translate-x-1/2" />
    </div>
  </div>
  </div>
</section>

);

export default MissionSection;
