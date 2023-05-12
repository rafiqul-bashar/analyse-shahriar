import React from "react";
import TestimonialItem from "./TestimonialItem";

export default function Testimonials() {
  return (
    <div className="bg-black py-16">
      <div className="container mx-auto w-full max-w-6xl ">
        <div className="flex items-center mb-6">
          <h2 className="text-[32px] font-semibold my-4 text-white ">
            What our client says!
          </h2>
          <img
            src="/img/arrowRight.svg"
            alt="arrow right"
            className="h-5 w-5 ml-auto"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </div>
    </div>
  );
}
