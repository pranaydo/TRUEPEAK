import React from "react";
import ringImage from "../assets/ringImage.png"; // replace with actual image path

const TransformNow = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left: Text & Button */}
      <div className="text-center lg:text-left max-w-xl">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug mb-6">
          This is not just about living longer. <br />
          It’s about living healthier longer.
        </h2>
        <button className="bg-green-600 text-white text-lg font-medium px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          Transform Now
        </button>
      </div>

      {/* Right: Decorative Rings Image */}
      <div className="mb-10 lg:mb-0">
        <img
          src={ringImage}
          alt="Decorative rings"
          className="w-64 md:w-80 lg:w-[420px] mx-auto"
        />
      </div>
    </section>
  );
};

export default TransformNow;
