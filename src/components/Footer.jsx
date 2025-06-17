import React from "react";
import logo from "../assets/logoondark.png";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <>
      <div className="bg-primary -mb-[200px]  rounded-tl-3xl rounded-tr-3xl overflow-hidden flex ">
        <img
          src={logo}
          alt=""
          height={470}
          width={470}
          className="-mt-[144px] "
        />
      </div>
      <FooterContent />
    </>
  );
};

export default Footer;
