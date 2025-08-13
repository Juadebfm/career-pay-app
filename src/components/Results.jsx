import { IoCheckmark } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi2";

const Results = () => {
  return (
    <section className="px-[35px] lg:px-[110px] pt-6 min-h-[50vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-10 lg:gap-28">
      <div className="w-full lg:w-auto">
        <img src="/fix.svg" alt="" className="w-full" />
      </div>

      <div>
        <span className="tracking-wide uppercase text-[#121212]/70 text-sm font-medium">
          Our Promise
        </span>
        <h2 className="text-4xl lg:text-[50px] font-sfPro font-bold w-[90%] leading-none pt-3 pb-5">
          Platform that solves everything
        </h2>
        <p className="font-sfPro font-normal text-lg text-[#121212]/70 mb-[24px] leading-relaxed">
          Get the freedom to make quick and easy structural financial decisions,
          optimize processes, work smart, and transform your compensation
          management experience.
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#1D4EFF] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <IoCheckmark className="w-3 h-3 text-white" />
            </div>
            <div>
              <span className="font-sfPro capitalize font-semibold text-[#121212]">
                Complete automation
              </span>
              <span className="font-sfPro font-normal text-[#121212]/70">
                - Full payroll processing ensuring compliance and accuracy.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#1D4EFF] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <IoCheckmark className="w-3 h-3 text-white" />
            </div>
            <div>
              <span className="font-sfPro capitalize font-semibold text-[#121212]">
                Zero complexity
              </span>
              <span className="font-sfPro font-normal text-[#121212]/70">
                - Simplified ESOP management to attract and retain top talent.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#1D4EFF] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <IoCheckmark className="w-3 h-3 text-white" />
            </div>
            <div>
              <span className="font-sfPro capitalize font-semibold text-[#121212]">
                Financial flexibility
              </span>
              <span className="font-sfPro font-normal text-[#121212]/70">
                - Talent credit financing options to manage cash flow challenges.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#1D4EFF] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
              <IoCheckmark className="w-3 h-3 text-white" />
            </div>
            <div>
              <span className="font-sfPro capitalize font-semibold text-[#121212]">
                Smart efficiency
              </span>
              <span className="font-sfPro font-normal text-[#121212]/70">
                - Streamlined processes that save time and resources.
              </span>
            </div>
          </div>
        </div>

        <button className="mt-8 bg-[#1D4EFF] text-white px-6 py-3 rounded-lg font-sfPro font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
          Become A Client
          <HiArrowRight className="w-4 h-4 pt-1" />
        </button>
      </div>
    </section>
  );
};

export default Results;
