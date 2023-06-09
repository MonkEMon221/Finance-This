import React from "react";

const NewsSetller = () => {
  return (
    <div className="w-full py-16 px-4 text-white ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="font-semibold py-2">
            Sign up to our newslletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter E-mail"
              className="flex text-black w-full p-3 rounded-md mr-2"
            ></input>
            <button className="bg-[#00df69] w-[200px] text-black border border-white rounded-lg p-2 hover:bg-white hover:text-black hover:border-[#00df9a] font-semibold tracking-wide mt-[8px] my-2">
              Notify Me
            </button>
          </div>
          <p className="p-2">
            We care bout the protection of your data. Read our
            <span className="text-[#00df69]"> Privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsSetller;
