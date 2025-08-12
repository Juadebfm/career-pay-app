import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";

const Manage = () => {
  return (
    <section className="px-[35px] lg:px-[110px] pt-14 lg:pt-20 min-h-[50vh] lg:min-h-screen">
      <div className="w-full flex items-center justify-center flex-col">
        <span className="text-center text-xl font-sfPro font-light uppercase text-[#121212]/70 tracking-wider">
          Who is career pay suitable for ?
        </span>
        <h2 className="font-sfPro font-bold text-4xl lg:text-[50px] w-full lg:w-[60%] text-center leading-tight mt-6 capitalize">
          Manage your future compensation in one space
        </h2>
      </div>

      <div className="mt-12 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-[47px] mx-auto">
        <div className="h-max lg:h-[300px] rounded-md hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer shadow-md border border-slate-100 p-[60px] lg:p-[35px]">
          <FaPeopleGroup className="text-[24px] text-[#1D4EFF]" />
          <h3 className="font-sfPro font-semibold text-[25px] capitalize leading-tight py-[25px]">
            Early stage companies and startups
          </h3>
          <p className="text-[#121212] font-sfPro font-normal text-lg">
            They often face cash flow constraints but need to attract and retain
            skilled employees
          </p>
        </div>
        <div className="h-max lg:h-[300px] rounded-md hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer shadow-md border border-slate-100 p-[60px] lg:p-[35px]">
          <BsBuildingsFill className="text-[24px] text-[#1D4EFF]" />
          <h3 className="font-sfPro font-semibold text-[25px] capitalize leading-tight py-[25px]">
            Small & medium-scale enterprise (SME)
          </h3>
          <p className="text-[#121212] font-sfPro font-normal text-lg">
            This companies requires robust tools for managing payroll and equity
            as they scale.
          </p>
        </div>
        <div className="h-max lg:h-[300px] rounded-md hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer shadow-md border border-slate-100 p-[60px] lg:p-[35px]">
          <RiUserCommunityFill className="text-[24px] text-[#1D4EFF]" />
          <h3 className="font-sfPro font-semibold text-[25px] capitalize leading-tight py-[25px]">
            Large Scale Cooperations
          </h3>
          <p className="text-[#121212] font-sfPro font-normal text-lg">
            These companies require payroll management for their outsourced
            employees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manage;
