import React from "react";

const FooterGrid = (props) => {
  const first = props.first;
  const second = props.second;
  const third = props.third;
  const fourth = props.fourth;
  const fifth = props.fifth;
  const sixth = props.sixth;

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="font-bold text-gray-500 text-base md:text-lg border-b border-b-gray-600 px-4 pb-1 mb-2">
        {first}
      </h1>
      <h1 className="text-gray-400 text-xs md:text-sm cursor-pointer mb-1">
        {second}
      </h1>
      <h1 className="text-gray-400 text-xs md:text-sm cursor-pointer mb-1">
        {third}
      </h1>
      <h1 className="text-gray-400 text-xs md:text-sm cursor-pointer mb-1">
        {fourth}
      </h1>
      <h1 className="text-gray-400 text-xs md:text-sm cursor-pointer mb-1">
        {fifth}
      </h1>
      <h1 className="text-gray-400 text-xs md:text-sm cursor-pointer mb-1">
        {sixth}
      </h1>
    </div>
  );
};

export default FooterGrid;
