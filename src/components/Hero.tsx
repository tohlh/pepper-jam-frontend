import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center relative my-8 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Babel Jam
          </p>
          <h2 className="tracking-widest text-sm text-center text-black-100 w-full">
            Imagine a world where language is no longer a barrier to
            understanding, connection, and collaboration. Babel Jam transforms
            how we experience and share video content globally.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
