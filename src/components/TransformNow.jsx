import React from "react";
import ringImage from "../assets/ringImage.png"; // replace with actual image path

const TransformNow = () => {
  return (
    <section className="relative bg-white min-h-[600px] overflow-hidden px-12">
      {/* Content with padding */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-24 py-24 relative z-10">
        {/* Left: Text & Button */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-36 md:text-6xl font-medium font-body text-[#232B3A] leading-tight mb-12">
            This is not just about living longer.
            <br />
            It’s about living healthier longer.
          </h2>
          <button className="bg-[#2C886A] text-white text-36 font-bold  font-body px-10 py-2 rounded-[40px] shadow-lg hover:bg-[#287256] transition mt-4">
            Transform Now
          </button>
        </div>
        {/* Spacer for layout */}
        <div className="flex-1" />
      </div>
      {/* Absolutely positioned image, outside the padded content */}
      <img
        src={ringImage}
        alt="Decorative rings"
        className="absolute right-0 bottom-0 w-[65vw] max-w-[900px] h-auto object-contain pointer-events-none select-none m-0 p-0 z-0"
      />
    </section>
  );
};

export default TransformNow;
