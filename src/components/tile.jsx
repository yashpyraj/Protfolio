import React, { useRef, useContext } from "react";
import { ScrollContext } from "../utites/scroll-observer";
import Portfolio from "./Portfolio";

export const TileContext = React.createContext({
  numofPage: 0,
  currentPage: 0,
});

export const TileWrapper = ({ children, numofPage }) => {
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);
  const { current: elContainer } = refContainer;
  let currentPage = 0;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const persentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    // console.log(clientHeight + halfH);
    // console.log(
    //   Math.min(
    //     clientHeight + halfH,
    //     Math.max(-screenH, scrollY - offsetTop) + halfH
    //   )
    // );
    console.log(persentY);

    currentPage = persentY * numofPage;
  }
  return (
    <TileContext.Provider value={{ numofPage, currentPage }}>
      <div ref={refContainer} className="relative bg-black text-white">
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }) => {
  return <div className="absolute w-full h-full">{children}</div>;
};

export const TileContent = ({ children }) => {
  return (
    <div className="sticky top-0  h-screen overflow-hidden">{children}</div>
  );
};

export const TileTitle = ({ page, renderContent }) => {
  const { currentPage, numofPage } = useContext(TileContext);
  const process = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, process * 4));
  const refContainer = useRef(null);
  if (process > 0.85 && page < numofPage - 1) {
    opacity = Math.max(0, (1.0 - process) * 4);
  }
  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full "
      style={{
        pointerEvents: process >= 0 || process >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ process })}
    </div>
  );
};
