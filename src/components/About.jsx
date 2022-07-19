import React from "react";

const About = () => {
  return (
    <div className="w-full ">
      <div className="mx-8 my-16 text-center">
        <h1 className="text-5xl font-bold max-w-[1240px] mx-auto mb-4">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-2xl text-slate-500 text centre px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="grid md:grid-cols-3 gap-2 px-2 my-8 ">
          <div className="items-center rounded-2xl border py-8 shadow-2xl bg-zinc-100 ">
            <h3 className=" text-5xl text-indigo-500 font-semibold ">100%</h3>
            <p className="text-xl text-slate-600 mt-2">Lorem Ipsum</p>
          </div>
          <div className="items-center rounded-2xl border py-8 shadow-2xl bg-zinc-100 ">
            <h3 className=" text-5xl text-indigo-500 font-semibold ">25K</h3>
            <p className="text-xl text-slate-600 mt-2">Lorem Ipsum</p>
          </div>
          <div className="items-center rounded-2xl border py-8 shadow-2xl bg-zinc-100 ">
            <h3 className=" text-5xl text-indigo-500 font-semibold ">3000</h3>
            <p className="text-xl text-slate-600 mt-2">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
