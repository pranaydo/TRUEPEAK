import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  {
    id: 1,
    title: "Injectable Therapies",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
  },
  {
    id: 2,
    title: "Card 2",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
  },
  {
    id: 3,
    title: "Card 3",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
  },
  { id: 4, title: "Card 4", image: "https://via.placeholder.com/300x200" },
  { id: 5, title: "Card 5", image: "https://via.placeholder.com/300x200" },
];

const GSAPPopOutCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        onEnter: () => {
          gsap.to(window, {
            scrollTo: {
              y: containerRef.current,
              offsetY: 0,
            },
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((_, i) => {
        const cardSelector = `.card-${i}`;
        tl.to(
          cardSelector,
          {
            scale: 1.05,
            y: -200,
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "+=0.1"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Section Title */}
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold tracking-wide text-[#F8F6F3]">
        Solutions With Purpose
      </h2>

      {/* Right Paragraph Description */}
      <div className="absolute top-[120px] right-[80px] max-w-sm text-14 font-medium leading-relaxed text-gray-300">
        <p>
          At TruPeak Health, our Injectable Therapies are designed to deliver
          essential nutrients, vitamins, and wellness compounds directly into
          your bloodstream for maximum absorption and immediate results. These
          therapies bypass the digestive system, ensuring your body receives the
          full benefit of each treatment.
        </p>
      </div>

      {/* Bottom Left Bullet Points */}
      <div className="absolute bottom-[80px] left-[80px] max-w-sm text-14 font-medium  text-gray-300 leading-relaxed">
        <p className="mb-2">
          We offer a curated range of injectables tailored to support:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Energy & Vitality (e.g., B12 shots)</li>
          <li>Immunity Boosting</li>
          <li>Metabolism & Weight Support</li>
          <li>Skin, Hair & Nail Health</li>
          <li>Mood & Cognitive Clarity</li>
        </ul>
      </div>

      {/* Card Stack */}
      {cards.map((card, i) => {
        const rotation = (i - 2) * 10;
        const offset = i * 10;

        return (
          <div
            key={card.id}
            className={`card-${i} absolute w-72 h-[360px] bg-[#c69c6d] rounded-[30px] shadow-xl text-black transition-all duration-300 overflow-hidden flex flex-col`}
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${offset}px, ${offset}px)`,
              top: "50%",
              left: "50%",
              zIndex: cards.length - i,
            }}
          >
            {/* Image: 80% of card height */}
            <div className="w-full p-6" style={{ height: "80%" }}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-[30px]"
              />
            </div>
            {/* Title & Button: 20% of card height */}
            {/* // ...existing code... */}
            {/* Title & Button: 20% of card height, in one line, bigger title */}
            <div
              className="flex items-center justify-between px-6 py-2"
              style={{ height: "25%" }}
            >
              <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
              <button className="px-2 py-1 bg-white rounded-full text-semibold text-14 shadow hover:bg-gray-200">
                Know More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GSAPPopOutCards;
