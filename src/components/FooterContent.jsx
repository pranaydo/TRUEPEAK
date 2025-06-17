import React from "react";

const FooterContent = () => {
  return (
    <footer className="bg-[#1D253C] text-white px-6 md:px-20 py-12 font-body">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="font-medium md:text-5xl text-32 mb-6 leading-tight">
            Transform into the <br />
            new <span className="text-[#E1C78F] ">You</span>
          </h2>
          <div className="mt-8 mb-4 text-20 font-medium">
            Subscribe to our Newsletter
          </div>
          <form className="flex items-center max-w-md">
            <input
              type="email"
              placeholder="Your Email..."
              className="flex-1 px-6 py-3 rounded-l-full rounded-r-none border-2 border-[#E1C78F] bg-transparent text-lg text-white placeholder-[#E3D2A2] focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#1D253C] border-2 border-[#E3D2A2] border-l-0 px-6 py-3 rounded-r-full rounded-l-none flex items-center justify-center"
            >
              <span className="text-[#E3D2A2] text-2xl">&#8594;</span>
            </button>
          </form>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-1 flex-wrap justify-between gap-12">
          <div className="font-body">
            <h3 className=" font-semibold text-20 mb-4">Company</h3>
            <ul className="space-y-2 text-16 font-medium text-[#F7F6F2]">
              <li>About</li>
              <li>Careers</li>
              <li>Locations</li>
              <li>Media & Press</li>
              <li>Success Stories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-20 font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-16 font-medium text-[#F7F6F2]">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Accessibility</li>
              <li>
                GDPR / HIPAA /<br />
                SOC 2 / ISO /<br />
                FDA Compliance
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-20 font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-16 font-medium text-[#F7F6F2] mb-8">
              <li>At-Home Services</li>
              <li>Memberships</li>
            </ul>
            <h3 className="text-20 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2text-16 font-medium text-[#F7F6F2]">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
