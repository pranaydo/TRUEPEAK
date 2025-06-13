import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full bg-primary py-12 md:py-20 px-4 md:px-0 border-b-4 border-[#7ec3b0] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Headline */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-secondary font-body font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
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
        <div className="md:w-1/2 text-white font-body text-base md:text-lg lg:text-xl leading-relaxed">
          <p>
            At TruPeak, we don’t just treat symptoms—
            <br className="hidden md:block" />
            we decode your biology, restore your vitality, and reimagine what
            health feels like. This is your space to reconnect with your highest
            self—guided by science, elevated by care, and powered by purpose.
          </p>
        </div>
      </div>
      {/* Down Arrowbackground: #2C886A; */}
      <div className="absolute left-8 -bottom-10 md:left-20">
        <div className="w-24 h-24 bg-[#2C886A] rounded-full flex items-center justify-center shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#fff"
              strokeWidth="2"
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
