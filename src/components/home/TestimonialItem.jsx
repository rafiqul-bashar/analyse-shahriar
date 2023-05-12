import React from "react";

export default function TestimonialItem() {
  return (
    <div className="bg-white p-6 flex flex-col gap-3 h-[410px]">
      <img
        src="/img/avatar.png"
        alt="avatar"
        className="object-contain h-16 w-16"
      />
      <h2 className="font-medium">David Watson</h2>
      <h5>CEO, Founder Pixel.com</h5>
      <p className="text-light-gray">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using
      </p>
      <img
        src="/img/stars.png"
        alt="stars"
        className="object-contain h-20 w-20"
      />
    </div>
  );
}
