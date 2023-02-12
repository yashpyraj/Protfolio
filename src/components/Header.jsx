import React, { useRef, useContext, useEffect } from "react";
import { FiChevronsDown } from "react-icons/fi";
import { ScrollContext } from "../utites/scroll-observer";
import videomp4 from "../../assets/bg_video.mp4";
import videowebm from "../../assets/bg_video.webm";
function Header() {
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={videomp4} type="video/mp4" />
        <source src={videowebm} type="video/webm; codecs=vp9" />
      </video>
      <div className="p-12 font-bold z-10 text-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] transition-all duration-1000 flex-1 flex justify-center items-center flex-col">
        <h1 className="mb-6 text-3xl xl:text-5xl">Yash Raj</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight text-white text-center">
          <span>Front-end and Mobile Developer </span>
        </h2>
      </div>
      <div className="z-10 text-center text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] pb-20 md:pb-10 transition-all duration-1000 ">
        <FiChevronsDown size={30} />
      </div>
    </div>
  );
}

export default Header;
