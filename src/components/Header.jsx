import React, { useState } from "react";
import logo from "../assets/truepeaklogo.png";
import video1 from "../assets/vedio1.mp4";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" text-26 relative w-full h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

      {/* Header/Navbar */}
      <header className="relative z-20 flex justify-between items-center px-4 md:px-10 h-[90px] md:h-[100px]">
        {/* Hamburger Icon */}
        <button
          className="md:hidden z-40"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-[#1a1a38]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>

        {/* Left Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 text-26 font-semibold text-navlinks">
          <a className="header-links  text-26" href="#">
            Services
          </a>
          <a className="header-links " href="#">
            Locations
          </a>
          <a className="header-links " href="#">
            At-Home
          </a>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center">
          <img
            src={logo}
            alt="Trupeak Health"
            className="w-[300px] h-[200px] object-contain"
          />
        </div>

        {/* Right Links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-navlinks font-semibold">
          <a className="header-links " href="#">
            About Us
          </a>
          <a className="header-links " href="#">
            Blogs
          </a>
          <button className="join-btn bg-[#18243A70] text-white px-6 py-2 rounded-full hover:bg-[#505a6e] transition ">
            Join Us
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/60 z-30 flex flex-col items-center justify-center md:hidden">
            <div className="bg-white rounded-xl p-8 space-y-6 text-[#1a1a38] font-semibold shadow-lg">
              <a
                className="block text-lg"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="block text-lg"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Locations
              </a>
              <a
                className="block text-lg"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                At-Home
              </a>
              <a
                className="block text-lg"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a
                className="block text-lg"
                href="#"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </a>
              <button
                className="join-btn bg-[#616c84] text-white px-5 py-2 rounded-full hover:bg-[#505a6e] transition text-lg w-full"
                onClick={() => setMenuOpen(false)}
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </header>
      <hr className="border-1 border-[#18243A]  z-20 relative" />
    </div>
  );
};

export default Header;
