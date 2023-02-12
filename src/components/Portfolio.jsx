import React, { useContext, useRef, useEffect } from "react";
import s from "../styles/skills.css";
import { ScrollContext } from "../utites/scroll-observer";

const opacityForBLock = (sectionProcess, blockNo) => {
  const process = sectionProcess - blockNo;
  if (process >= 0 && process < 1) return 1;
  return 0.2;
};
function Portfolio() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);
  const noOfPages = 3;
  let process = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const persentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    process = Math.min(noOfPages - 0.5, Math.max(0.5, persentY * noOfPages));
  }
  return (
    <section ref={refContainer} className=" bg-black text-white ">
      <div className="min-h-screen  text-3xl md:text-4xl lg:text-7xl tracking-tighter font-semibold flex flex-col max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 justify-center items-center">
        <div className="leading-[1.15]">
          <span
            className="inline-block transition-opacity duration-500"
            style={{
              opacity: opacityForBLock(process, 0),
            }}
          >
            I am a front-end and mobile developer with experience in some of the
            latest and most popular technologies in the industry, such as{" "}
            <span className="text-slate-400 hover:text-sky-400">React</span>,
            <span className="text-slate-400 hover:text-sky-400">Next.js</span>,
            <span className="text-slate-400 hover:text-sky-400">Astro</span>,
            <span className="text-slate-400 hover:text-sky-400">Redux</span>,
            <span className="text-slate-400 hover:text-sky-400">
              React Native
            </span>
          </span>
          <span
            className={`transition-opacity inline-block duration-500 after:content-["_"]`}
            style={{
              opacity: opacityForBLock(process, 1),
            }}
          >
            With a commitment to continuous learning and growth, I am always
            exploring new technologies and techniques to enhance my skills and
            deliver cutting-edge solutions.
          </span>
          <br />
          <span
            className={`transition-opacity duration-500 inline-block `}
            style={{
              opacity: opacityForBLock(process, 2),
            }}
          >
            Let's work together to bring your vision to life and create
            something truly amazing.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
