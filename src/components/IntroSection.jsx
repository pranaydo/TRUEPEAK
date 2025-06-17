import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full bg-primary py-12 md:py-20 px-4 shadow-xl border-b-4 border-[#7ec3b0] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 relative z-10">
        {/* Left: Headline */}
        <div className="md:w-1/2 text-center md:text-right mx-5">
          <h2 className="text-secondary font-body font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
            You’re not
            <br />
            starting over.
            <br />
            You’re starting
            <br />
            higher.
          </h2>
        </div>

        {/* Right: Paragraph */}
        <div className="md:w-1/2 text-white font-normal text-40 sm:text-lg md:text-xl leading-relaxed text-center md:text-left mt-6 md:mt-0 ">
          <p>
            At TruPeak, we don’t just treat symptoms—
            <br className="hidden md:block" />
            we decode your biology, restore your vitality, and reimagine what
            health feels like. This is your space to reconnect with your highest
            self—guided by science, elevated by care, and powered by purpose.
          </p>
        </div>
      </div>

      {/* 🔻 Down Arrow */}
      <div className="absolute left-28 -translate-x-1/2 bottom-[-3.5rem] sm:bottom-[-4rem]">
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#2C886A] rounded-full flex items-center justify-center shadow-2xl">
          <svg
            width="64"
            height="64"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
