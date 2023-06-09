import React from "react";

const Card = (props) => {
  const image = props.image;
  const user = props.user;
  const price = props.price;
  const storageSize = props.storageSize;
  const maxUser = props.maxUser;
  const uploadSize = props.uploadSize;
  const bg = props.bg;
  const btnBg = props.btnBg;
  const btnColor = props.btnColor;
  return (
    <div
      className={`${bg} flex flex-col items-center pt-2 pb-4 px-8 m-4 shadow-2xl rounded-2xl cursor-pointer hover:scale-[1.1] hover:ease-in-out duration-100`}
    >
      <img src={image} alt="/" className="w-[100px] h-[75px] mb-2"></img>
      <h1 className="font-bold text-xl">{user} User</h1>
      <h1 className="text-3xl font-extrabold my-4">$ {price}</h1>
      <p className="border-b border-gray-300 w-full text-center rounded-sm mb-2">
        {storageSize} GB Storage
      </p>
      <p className="border-b border-gray-300 w-full text-center rounded-sm mb-2">
        {maxUser} user allowed
      </p>
      <p className="border-b border-gray-300 w-full text-center rounded-sm mb-2">
        Send upto {uploadSize} GB
      </p>
      <button
        className={`${btnBg} w-[200px] ${btnColor} border border-white rounded-lg p-2 hover:bg-white hover:text-black hover:border-[#00df9a] font-semibold tracking-wide mt-[8px] my-2`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
