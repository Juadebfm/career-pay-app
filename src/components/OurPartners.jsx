import React from "react";
import Partners from "./Partners";

const OurPartners = () => {
  return (
    <section className="px-20 lg:px-[110px] py-40 lg:py-20 h-max">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[40px] capitalize font-medium">Our partners</h2>
        <p className="text-lg text-[#121212]/70 w-[90%] lg:w-[40%] mx-auto text-center">
          We’ve proferred solutions to market leading providers in the variety
          of clients providing efficient solutions specifically for the digital
          economy.
        </p>
      </div>
      <div>
        <Partners />
      </div>
    </section>
  );
};

export default OurPartners;
