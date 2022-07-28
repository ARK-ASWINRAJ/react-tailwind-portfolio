import React from "react";
import bgimg from "../assests/bg-img.png";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="w-full  bg-zinc-100 flex flex-col justify-between items-center ">
      <div className="grid  sm:grid-cols-2 max-w-[1400px] mx-auto my-8 ">
        <div className="order-last  py-8 px-6 flex flex-col justify-center mx-auto items-start">
          <div>
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit</h1>
            <p className="text-2xl text-gray-500">
              {" Lorem ipsum dolor sit amet, consectetur adipiscing"}
            </p>
          </div>

          <button className=" text-white bg-indigo-600 md:w-[40%] w-[60%] rounded py-3 px-6  my-4 hover:shadow-xl hover:border">
            Get Started
          </button>
        </div>
        <div className=" items-center sm:order-last">
          <img className="px-2 m-auto " src={bgimg} alt="/"></img>
        </div>
      </div>
      <div
        className="mx-8 flex flex-col text-center shadow-xl border px-4 py-4  bg-zinc-100 bg-opacity-80
         rounded-2xl my-8   md:w-[760px]   "
      >
        <h1 className="text-3xl text-slate-600 font-bold">Services</h1>
        <p className="text-slate-500 ">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing "}
        </p>
        <div className=" mt-4 flex flex-wrap justify-between">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudUploadIcon className="pr-2 h-6 text-indigo-600" /> Lorem Ipsum
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <DatabaseIcon className="pr-2 h-6 text-indigo-600" /> Lorem Ipsum
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <ServerIcon className="pr-2 h-6 text-indigo-600" /> Lorem Ipsum
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <PaperAirplaneIcon className="pr-2 h-6 text-indigo-600" /> Lorem
            Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
