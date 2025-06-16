import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
  { id: 5, content: "Card 5" },
];

const GSAPPopOutCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Auto-scroll into full view
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
          end: "+=1500", // control total scroll length
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((_, i) => {
        const cardSelector = `.card-${i}`;

        tl.to(
          cardSelector,
          {
            scale: 1.1,
            y: -150,
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
      className="w-full h-screen bg-gray-100 relative overflow-hidden"
    >
      {cards.map((card, i) => (
        <div
          key={card.id}
          className={`card-${i} absolute top-1/2 left-1/2 w-64 h-40 bg-white border rounded-xl shadow-xl flex items-center justify-center text-lg font-semibold`}
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: cards.length - i,
          }}
        >
          {card.content}
        </div>
      ))}
    </div>
  );
};

export default GSAPPopOutCards;
