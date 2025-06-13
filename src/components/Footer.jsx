import React from "react";
import logo from "../assets/truepeaklogo.webp"; // Update with your logo path

const Footer = () => (
  <footer className="w-full bg-[#1a1a38] text-white rounded-t-[48px] px-6 py-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Left: Logo & Newsletter */}
      <div className="flex-1 min-w-[320px]">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={logo}
            alt="Trupeak Health"
            className="w-20 h-20 object-contain"
          />
          <span className="font-heading text-4xl font-bold">
            Trupeak
            <br />
            Health
          </span>
        </div>
        <div className="mt-4 mb-8">
          <span className="block text-3xl md:text-4xl font-heading font-normal leading-tight">
            Transform into the
            <br />
            new <span className="text-[#e1c78f] font-bold">You</span>
          </span>
        </div>
        <div className="mb-4 text-lg">Subscribe to our Newsletter</div>
        <form className="flex items-center max-w-md">
          <input
            type="email"
            placeholder="Your Email..."
            className="flex-1 bg-transparent border-4 border-[#e1c78f] rounded-full px-6 py-3 text-white placeholder:text-[#e1c78f] outline-none"
          />
          <button
            type="submit"
            className="ml-[-48px] bg-[#e1c78f] text-[#1a1a38] rounded-full w-12 h-12 flex items-center justify-center shadow transition hover:bg-[#d1b36f]"
            aria-label="Subscribe"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#1a1a38"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M8 5l8 7-8 7" />
            </svg>
          </button>
        </form>
      </div>
      {/* Right: Links */}
      <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-xl mb-4">Company</div>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Locations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Media & Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Success Stories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-xl mb-4">Legal & Policies</div>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                GDPR / HIPAA / SOC 2 / ISO / FDA Compliance
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-xl mb-4">Services</div>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                At-Home Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Memberships
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-xl mb-4">Connect</div>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e1c78f]">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
