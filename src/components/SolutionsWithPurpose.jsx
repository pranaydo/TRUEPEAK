import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  {
    id: 1,
    title: "Injectable Therapies",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "At TruPeak Health, our Injectable Therapies are designed to deliver essential nutrients, vitamins, and wellness compounds directly into your bloodstream for maximum absorption and immediate results. These therapies bypass the digestive system, ensuring your body receives the full benefit of each treatment.",
    bullets: [
      "Energy & Vitality (e.g., B12 shots)",
      "Immunity Boosting",
      "Metabolism & Weight Support",
      "Skin, Hair & Nail Health",
      "Mood & Cognitive Clarity",
    ],
  },
  {
    id: 2,
    title: "Card 2",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "Card 2 focuses on holistic wellness, offering solutions that rejuvenate your body and mind for a balanced lifestyle.",
    bullets: [
      "Holistic Wellness",
      "Mind & Body Balance",
      "Stress Reduction",
      "Improved Sleep",
      "Enhanced Focus",
    ],
  },
  {
    id: 3,
    title: "Card 3",
    image: "https://www.visualsstock.com/details_watermark.php?filename=39515",
    description:
      "Card 3 provides advanced therapies for rapid recovery and sustained energy, perfect for active lifestyles.",
    bullets: [
      "Rapid Recovery",
      "Sustained Energy",
      "Muscle Repair",
      "Hydration Boost",
      "Performance Support",
    ],
  },
  {
    id: 4,
    title: "Card 4",
    image: "https://via.placeholder.com/300x200",
    description:
      "Card 4 delivers targeted solutions for skin, hair, and nail health, helping you look and feel your best.",
    bullets: [
      "Skin Health",
      "Hair Strengthening",
      "Nail Growth",
      "Anti-Aging",
      "Radiance Boost",
    ],
  },
  {
    id: 5,
    title: "Card 5",
    image: "https://via.placeholder.com/300x200",
    description:
      "Card 5 supports cognitive clarity and mood enhancement, empowering you to perform at your peak every day.",
    bullets: [
      "Cognitive Clarity",
      "Mood Enhancement",
      "Stress Management",
      "Mental Energy",
      "Focus & Productivity",
    ],
  },
];

const GSAPPopOutCards = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              cards.length - 1,
              Math.floor(progress * cards.length)
            );
            setActiveIndex(index);
          },
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

  // SVG line coordinates (adjust as needed for your layout)
  const svgWidth = 700;
  const svgHeight = 550;
  const start = { x: 620, y: 380 }; // near card edge (right-bottom)
  const corner = { x: 320, y: 480 }; // corner point
  const end = { x: 220, y: 620 }; // above bullet points

  return (
    <div
      className="relative w-full h-screen bg-[#0f172a] text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Section Title */}
      <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-40 font-semibold text-body tracking-wide text-secondary">
        Solutions With Purpose
      </h2>

      {/* SVG Line */}
      {/* <svg
        className="pointer-events-none absolute"
        style={{
          left: 0,
          top: 0,
          zIndex: 20,
        }}
        width={svgWidth}
        height={svgHeight}
      >
        <polyline
          points={`${start.x},${start.y} ${corner.x},${corner.y} ${end.x},${end.y}`}
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
      </svg> */}

      {/* Right Paragraph Description (Animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex + "-desc"}
          className="absolute top-[120px] right-[80px] max-w-sm text-14 font-medium leading-relaxed text-gray-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p>{cards[activeIndex].description}</p>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Left Bullet Points (Animated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex + "-bullets"}
          className="absolute bottom-[80px] left-[80px] max-w-sm text-14 font-medium text-gray-300 leading-relaxed"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2">
            {activeIndex === 0
              ? "We offer a curated range of injectables tailored to support:"
              : "Key Benefits:"}
          </p>
          <ul className="list-disc ml-5 space-y-1">
            {cards[activeIndex].bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      {/* Card Stack */}
      {cards.map((card, i) => {
        const rotation = (i - 2) * 10;
        const offset = i * 10;
        const isActive = i === activeIndex;

        return (
          <div
            key={card.id}
            className={`card-${i} absolute w-72 h-[360px] bg-[#c69c6d] rounded-[30px] shadow-xl text-black transition-all duration-300 overflow-hidden flex flex-col
              ${isActive ? "scale-105 shadow-2xl z-50" : "opacity-80"}
            `}
            style={{
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${offset}px, ${offset}px)`,
              top: "50%",
              left: "50%",
              zIndex: cards.length - i + (isActive ? 100 : 0),
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
            {/* Title & Button: 20% of card height, in one line, bigger title */}
            <div
              className="flex items-center justify-between px-6 py-2"
              style={{ height: "20%" }}
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
