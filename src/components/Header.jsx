import React from "react";
import { FiChevronsDown } from "react-icons/fi";
function Header() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/src/assets/bg_video.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/src/assets/bg_video.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className="p-12 font-bold z-10 text-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] transition-all duration-1000 flex-1 flex justify-center items-center flex-col">
        <h1 className="mb-6 text-3xl xl:text-5xl">SP Sachin</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight text-white text-center">
          <span>Full-Stack Developer</span>
        </h2>
      </div>
      <div className="z-10 text-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] pb-20 md:pb-10 transition-all duration-1000 ">
        <FiChevronsDown size={30} />
      </div>
    </div>
  );
}

export default Header;
