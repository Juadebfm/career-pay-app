import React from "react";

const HeroHome = () => {
  return (
    <section className="bg-homeHero h-auto min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center text-white px-20 xl:px-[110px] pt-[200px] lg:pt-[100px]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-14">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="font-sfPro font-bold text-[70px] lg:text-[42px] xl:text-[50px] leading-tight pt-10 lg:pt-0">
            Simplifying Compensation Management for Organizations
          </h1>

          <p className="text-[35px] lg:text-[20px] font-sfPro font-normal mt-8 lg:mt-[18px] leading-relaxed lg:leading-[35px]">
            Empowering organizations with Talent Credit Financing, Employee
            Stock Ownership Plan, and Payroll Management System.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-col lg:flex-row gap-8 lg:gap-5 font-sfPro font-normal w-full">
            <button className="w-full sm:w-auto min-w-[160px] bg-[#1D4EFF] hover:bg-[#1D4EFF]/80 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 active:translate-y-1 h-[100px] lg:h-auto text-3xl lg:text-base">
              Get Started
            </button>
            <button className="w-full sm:w-auto min-w-[160px] border-[0.5px] border-gray-400 hover:border-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/30 active:scale-95 h-[100px] lg:h-auto text-3xl lg:text-base">
              Get A Demo
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full">
            <img
              src="/heroImage.svg"
              alt="Hero illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
