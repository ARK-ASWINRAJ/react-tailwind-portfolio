import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="bg-gray-200 w-screen  shadow-xl ">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <h2 className="text-3xl text-gray-800 font-bold px-4 py-4 hover:text-pink-700">
            Company.
          </h2>
          <ul className="hidden md:flex items-center pl-6">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="mx-2 border-2 rounded-full border-pink-700 text-pink-700 px-4 py-2">
            {"Sign In"}
          </button>
          <button className="mx-2 border-2 rounded-full  text-white bg-pink-700 px-4 py-2">
            {"Sign Up "}
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className=" w-8 mx-4 text-gray-800 hover:text-pink-700 " />
          ) : (
            <XIcon className=" w-8 mx-4 text-gray-800 hover:text-pink-700" />
          )}
        </div>
      </div>
      <ul className={nav ? "flex flex-col w-full md:hidden px-8" : "hidden"}>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-pink-700">
          Home
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-pink-700">
          About
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-pink-700">
          Products
        </li>
        <li className="border-b border-zinc-400 py-2 mb-2 hover:text-pink-700">
          Contact
        </li>
        <div className="flex flex-col my-3  w-full">
          <button className=" border-2 rounded border-pink-700 text-pink-700 px-4 py-2 mb-4 hover:shadow-lg">
            {"Sign In"}
          </button>
          <button className=" border-2 rounded  text-white bg-pink-700 px-4 py-2 hover:shadow-lg shadow">
            {"Sign Up "}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
