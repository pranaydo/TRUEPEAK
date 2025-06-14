import React from "react";
import doctorImg from "../assets/Doctor.jpg"; // Update path as needed

const MissionSection = () => (
  <section className="w-full bg-[#e1c78f] rounded-[48px] flex flex-col md:flex-row items-stretch relative overflow-visible min-h-[480px]">
    {/* Left: Mission Text & Stats */}
    {/* <div className="flex-1 flex flex-col justify-center pl-40 px-8 py-10 md:py-0">
      <p className="font-body text-primary text-lg md:text-xl font-semibold mb-8 max-w-xl">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mt-8">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
          <div className="text-base text-primary mt-2">Years of Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary">38+</div>
          <div className="text-base text-primary mt-2">
            Countries in Services
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary">38+</div>
          <div className="text-base text-primary mt-2">
            Accuracy Rate in diagnostics
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary">
            13K+
          </div>
          <div className="text-base text-primary mt-2">Satisfied Customers</div>
        </div>
      </div>
    </div> */}
    <div className="flex-1 flex flex-col justify-center pl-4 md:pl-40 px-8 py-10 md:py-0">
      <p className="font-body text-primary text-lg md:text-xl font-semibold mb-8 max-w-xl text-center md:text-left">
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mt-8 text-center md:text-left">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
          <div className="text-base text-primary mt-2">Years of Experience</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary">38+</div>
          <div className="text-base text-primary mt-2">
            Countries in Services
          </div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary">38+</div>
          <div className="text-base text-primary mt-2">
            Accuracy Rate in diagnostics
          </div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-primary">
            13K+
          </div>
          <div className="text-base text-primary mt-2">Satisfied Customers</div>
        </div>
      </div>
    </div>

    {/* Right: Image & Overlays */}
    <div className="flex-1 relative flex items-end justify-center min-w-[320px]">
      <img
        src={doctorImg}
        alt="Doctor"
        className="rounded-[48px] w-full max-w-[420px] min-h-[400px] object-cover z-10 absolute  -bottom-16"
      />
      {/* Top right overlay */}
      <div className="absolute top-8 right-8 w-56 h-32 bg-white/70 rounded-2xl shadow-xl z-20 backdrop-blur-md" />
      {/* Bottom right overlay */}
      <div className="absolute bottom-8 right-8 w-56 h-32 bg-white/70 rounded-2xl shadow-xl z-20 backdrop-blur-md" />
    </div>
  </section>
);

export default MissionSection;
