import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 h-[80px] text-white">
      <h1 className="w-full font-bold text-3xl text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="mx-4 cursor-pointer hover:text-[#00df9a]">Home</li>
        <li className="mx-4 cursor-pointer hover:text-[#00df9a]">Company</li>
        <li className="mx-4 cursor-pointer hover:text-[#00df9a]">Resource</li>
        <li className="mx-4 cursor-pointer hover:text-[#00df9a]">About</li>
        <li className="mx-4 cursor-pointer hover:text-[#00df9a]">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <MenuIcon size={20} className="cursor-pointer" />
        ) : (
          <CloseIcon size={20} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-1000%] ease-out duration-500"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-200 md:hidden"
        }
      >
        <ul className="p-4 uppercase">
          <li className="mb-4 p-4 cursor-pointer hover:text-[#00df9a] border-b border-b-gray-600 ">
            Home
          </li>
          <li className="mb-4 p-4 cursor-pointer hover:text-[#00df9a] border-b border-b-gray-600">
            Company
          </li>
          <li className="mb-4 p-4 cursor-pointer hover:text-[#00df9a] border-b border-b-gray-600">
            Resource
          </li>
          <li className="mb-4 p-4 cursor-pointer hover:text-[#00df9a] border-b border-b-gray-600">
            About
          </li>
          <li className="mb-4 p-4 cursor-pointer hover:text-[#00df9a] ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
