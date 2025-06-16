import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cards = [
  {
    id: 1,
    title: "Injectable Therapies",
    image:
      "https://media.istockphoto.com/id/481073846/photo/the-long-hard-road-to-recovery.jpg?s=612x612&w=0&k=20&c=8SK7QeWO9VZpy3ei3eBKLKLdcWpgLOOikyByYdrzkwU=",
  },
  {
    id: 2,
    title: "Card 2",
    image:
      "https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI=",
  },
  {
    id: 3,
    title: "Card 3",
    image:
      "https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?semt=ais_hybrid&w=740",
  },
  // { id: 4, title: "Card 4", image: "https://via.placeholder.com/300x200" },
  // { id: 5, title: "Card 5", image: "https://via.placeholder.com/300x200" },
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
            <div className="relative w-full h-[65%]">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover p-6 rounded-t-[30px]"
              />
              {/* Arrow overlay */}
              <div className="absolute top-[10%] left-[10%] w-12 h-12 text-black rotate-45 bg-white rounded-full">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 17 18"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" bg-white rounded-full w-full h-full p-4"
                  style={{ transform: "rotate(-40deg)" }} // Rotated 30 degrees left
                >
                  <path
                    d="M0.565936 0.479293L11.8252 0.92765C12.7145 0.963201 13.5534 1.35053 14.1572 2.00446C14.7611 2.65839 15.0805 3.52538 15.0452 4.41477C14.9763 6.14453 13.461 7.61081 11.7448 7.63749L15.4143 11.6113C16.6698 12.9709 16.585 15.0991 15.2254 16.3547C13.8657 17.6102 11.7375 17.5254 10.482 16.1658L6.81256 12.192C6.64951 13.9006 5.06737 15.2945 3.33761 15.2256C2.44824 15.1901 1.60939 14.8028 1.00555 14.1488C0.401699 13.4949 0.0822971 12.6279 0.117579 11.7385L0.565936 0.479293ZM12.4507 5.10327C12.6138 4.95336 12.7286 4.75838 12.7807 4.54308C12.8327 4.32778 12.8197 4.10186 12.7431 3.89401C12.6665 3.68616 12.5299 3.50574 12.3507 3.37565C12.1714 3.24557 11.9575 3.17168 11.7361 3.16337L2.71263 2.80404L2.3533 11.8276C2.34154 12.124 2.448 12.413 2.64929 12.631C2.85057 12.849 3.13018 12.9781 3.42664 12.9899C3.72154 12.9959 4.0073 12.8875 4.224 12.6874C4.4407 12.4873 4.57152 12.211 4.58902 11.9166L4.79635 6.70992L12.1261 14.6476C12.331 14.8505 12.6063 14.9666 12.8946 14.9716C13.183 14.9766 13.4621 14.8703 13.674 14.6746C13.8859 14.479 14.0141 14.2091 14.032 13.9213C14.0499 13.6335 13.9561 13.3498 13.7702 13.1294L6.44044 5.19175L11.6471 5.39909C11.9436 5.41094 12.2327 5.30453 12.4507 5.10327Z"
                    fill="#18243A"
                  />
                </svg>
              </div>
            </div>

            <div className="p-4 flex items-center justify-between h-[35%]">
              <h3 className="text-md font-semibold leading-tight">
                {card.title}
              </h3>
              <button className="ml-2 px-4 py-2 bg-white rounded-full text-sm shadow hover:bg-gray-200">
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
