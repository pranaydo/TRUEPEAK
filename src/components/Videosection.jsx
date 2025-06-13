import React from "react";
import video1 from "../assets/vedio1.mp4";
const Videosection = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-96 overflow-hidden text-white">
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
      </div>
    </div>
  );
};

export default Videosection;
