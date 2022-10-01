import React from "react";

function Portfolio() {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl  ">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tighter text-center ">
          <strong>My Portfolio</strong>
        </p>
        <p className="leading-tight max-w-5xl mx-auto text-2xl tracking-tighter text-center mt-20">
          A small gallery of my projects chosen by me. I've done them all
          together with amazing people. It's only a drop in the ocean compared
          to the entire list.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
