import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col max-w-[800px] h-screen w-full mt-[-96px] mx-auto justify-center text-center items-center uppercase">
        <p className="text-[#00df9a] font-bold p-2">Grow with Data Analitics</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-3">
          Grow with data
        </h1>
        <div className="flex">
          <p className="md:text-4xl sm:text-2xl text-xl font-mono">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-4xl sm:text-2xl text-xl font-mono pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-thin text-gray-500 p-4">
          Monitor your data analytics too improve your BTB, BTC, and SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] text-black border border-white rounded-lg p-2 hover:bg-white hover:border-[#00df9a] font-semibold tracking-wide mt-[8px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
