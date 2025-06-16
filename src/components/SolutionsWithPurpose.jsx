import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  {
    id: 1,
    title: "Injectable Therapies",
    image: "https://via.placeholder.com/300x200",
  },
  { id: 2, title: "Card 2", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Card 3", image: "https://via.placeholder.com/300x200" },
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
      ref={containerRef}
      className="w-full h-screen bg-[#0f172a] relative overflow-hidden"
    >
      {cards.map((card, i) => {
        const rotation = (i - 2) * 10;
        const offset = i * 10;

        return (
          <div
            key={card.id}
            className={`card-${i} absolute w-72 h-[420px] bg-[#c69c6d] rounded-[30px] shadow-xl text-black transition-all duration-300 overflow-hidden`}
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${offset}px, ${offset}px)`,
              top: "50%",
              left: "50%",
              zIndex: cards.length - i,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[65%] object-cover rounded-t-[30px]"
            />
            <div className="p-4 flex flex-col justify-between h-[35%]">
              <h3 className="text-xl font-semibold leading-tight">
                {card.title}
              </h3>
              <button className="mt-2 self-start px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-200">
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
