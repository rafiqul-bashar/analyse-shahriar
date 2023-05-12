import React from "react";

export default function PricingSection() {
  return (
    <div className="container  mx-auto border-[2px] border-dashed border-[#474747] p-6 grid grid-cols-4 mb-16">
      <div className="col-span-2 flex flex-col  p-8  justify-center space-y-6 text-[20px] mx-auto">
        <h4>Feature One</h4>
        <h4>Feature Two</h4>
        <h4>Feature Three</h4>
        <h4>Feature Four</h4>
        <h4>Feature Five</h4>
      </div>
      <div className="border-[2px] border-dark-gray  space-y-6 w-fit px-16 py-8 relative">
        <span className="inline px-4 text-white bg-black absolute top-0 right-0">
          featured
        </span>
        <h2 className="text-black font-semibold text-center ">Enterprise</h2>
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <div className="relative flex space-x-8 mx-auto w-fit ">
          <span className="inline-block text-black font-semibold absolute bottom-2 left-0">
            $49
          </span>
          <span className="inline-block text-light-gray ">/year</span>
        </div>
        <button className="bg-black py-[10px] px-[30px] text-[18px] text-white">
          Buy Now
        </button>
      </div>
      <div className="border-[2px] border-dark-gray p-4 space-y-6 w-fit px-16 py-8 ">
        <span className="inline px-4 text-white bg-white absolute top-0 right-0"></span>
        <h2 className="text-black font-semibold text-center">Enterprise</h2>
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/cross.svg" alt="filled" className="mx-auto" />
        <img src="/img/checkdFill.svg" alt="filled" className="mx-auto" />
        <img src="/img/cross.svg" alt="filled" className="mx-auto" />
        <img src="/img/cross.svg" alt="filled" className="mx-auto" />
        <div className="relative flex space-x-8 mx-auto w-fit ">
          <span className="inline-block text-black font-semibold absolute bottom-2 left-0">
            $49
          </span>
          <span className="inline-block text-light-gray ">/year</span>
        </div>
        <button className="bg-black py-[10px] px-[30px] text-[18px] text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}
