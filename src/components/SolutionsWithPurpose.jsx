import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cardImg1 from "../assets/Doctor.jpg";

const cards = [
  {
    img: cardImg1,
    title: "Injectable Therapies",
    desc: "Know More",
  },
  {
    img: cardImg1,
    title: "Injectableee Therapies",
    desc: "Know More",
  },
  {
    img: cardImg1,
    title: "Therapies",
    desc: "Know More",
  },
  {
    img: cardImg1,
    title: "asdasdasdasdas Therapies",
    desc: "Know More",
  },
];

const SolutionsWithPurpose = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);

  // Lock scroll when in section and cards remain
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Section is in viewport and cards remain
      if (
        rect.top <= 0 &&
        rect.bottom > window.innerHeight &&
        activeIndex < cards.length
      ) {
        setScrollLocked(true);
        document.body.style.overflow = "hidden";
      } else {
        setScrollLocked(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: false });
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Listen for wheel/touch to pop cards
  useEffect(() => {
    if (!scrollLocked) return;
    const handleWheel = (e) => {
      if (e.deltaY > 0 && activeIndex < cards.length) {
        setActiveIndex((idx) => Math.min(idx + 1, cards.length));
      }
      e.preventDefault();
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    // For touch devices
    let touchStartY = null;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      if (touchStartY === null) return;
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 30 && activeIndex < cards.length) {
        setActiveIndex((idx) => Math.min(idx + 1, cards.length));
        touchStartY = null;
      }
      e.preventDefault();
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollLocked, activeIndex]);

  // Unlock scroll when all cards are gone
  useEffect(() => {
    if (activeIndex >= cards.length) {
      document.body.style.overflow = "";
      setScrollLocked(false);
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#1a1a38] flex flex-col items-center justify-center overflow-hidden rounded-[48px] px-4"
      style={{ scrollSnapAlign: "start" }}
    >
      <h2 className="text-secondary text-4xl md:text-5xl font-bold text-center mt-8 mb-4">
        Solutions With Purpose
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center justify-between">
        {/* Left: Card Stack */}
        <div className="relative flex-1 flex items-center justify-center min-h-[480px]">
          {/* <AnimatePresence>
            {cards.slice(activeIndex).map((card, idx) => (
              <motion.div
                key={card.title}
                className="absolute left-1/2 top-1/2 w-[340px] h-[420px] -translate-x-1/2 -translate-y-1/2 bg-[#cbb07a] rounded-3xl shadow-2xl flex flex-col items-center justify-end p-6"
                style={{
                  zIndex: cards.length - idx,
                  boxShadow: "0 8px 40px 0 rgba(0,0,0,0.25)",
                  rotate: `${idx * 6}deg`,
                  scale: 1 - idx * 0.04,
                  opacity: 1 - idx * 0.15,
                  pointerEvents: idx === 0 ? "auto" : "none",
                }}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-60 object-cover rounded-2xl mb-4"
                />
                <div className="w-full">
                  <div className="text-lg font-semibold text-primary mb-2">
                    {card.title}
                  </div>
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold shadow hover:bg-secondary transition">
                    {card.desc}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence> */}
        </div>
        {/* Right: Description */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-12">
          <p className="text-white text-lg md:text-xl max-w-lg mb-6">
            At TruPeak Health, our Injectable Therapies are designed to deliver
            essential nutrients, vitamins, and wellness compounds directly into
            your bloodstream for maximum absorption and immediate results. These
            therapies bypass the digestive system, ensuring your body receives
            the full benefit of each treatment.
          </p>
          <ul className="text-white text-base md:text-lg list-disc pl-5">
            <li>Energy &amp; Vitality (e.g., B12 shots)</li>
            <li>Immunity Boosting</li>
            <li>Metabolism &amp; Weight Support</li>
            <li>Skin, Hair &amp; Nail Health</li>
            <li>Mood &amp; Cognitive Clarity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SolutionsWithPurpose;
