import React from "react";

const Help = () => {
  return (
    <section className="px-0 lg:px-[70px] text-white">
      <div className="bg-homeHero p-20 lg:p-0 min-h-[447px] rounded-lg text-white flex flex-col lg:flex-row items-center justify-between">
        <div className="py-[40px] p-[20px] lg:pl-[60px] w-full lg:w-1/2">
          <h2 className="text-[60px] lg:text-[50px] leading-[1.2] mb-4 capitalize text-start lg:text-start">
            Helping startups navigating financial challenges, Our Results
            Speaks.
          </h2>

          <p className="text-[30px] lg:text-lg text-white/70 font-sfPro font-light">
            We reached this milestone through innovation and commitment to our
            clients. Experience the impact first hand.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-[20px] lg:p-[60px] grid grid-cols-3 items-center justify-center gap-5">
          <div className="border-[0.5px] border-slate-100 py-3 px-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
            <h3 className="font-medium text-3xl font-sfPro">100</h3>
            <p className="text-sm mt-1 tracking-wider">Clients Served</p>
          </div>
          <div className="border-[0.5px] border-slate-100 py-3 px-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
            <h3 className="font-medium text-3xl font-sfPro">50</h3>
            <p className="text-sm mt-1 tracking-wider">Payroll Processed</p>
          </div>
          <div className="border-[0.5px] border-slate-100 py-3 px-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-300">
            <h3 className="font-medium text-3xl font-sfPro">30</h3>
            <p className="text-sm mt-1 tracking-wider">ESOP Managed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
