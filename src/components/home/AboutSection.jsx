import React from "react";

export default function AboutSection() {
  return (
    <div className="container mx-auto w-full max-w-6xl py-24  grid grid-cols-2 gap-3">
      <div>
        <h2 className="text-[32px] font-semibold my-12 text-dark-gray">
          About Us
        </h2>
        <p>
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has{" "}
          <span className="text-black">survived not only five </span> centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
          <br />
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has{" "}
          <span className="text-black">survived not only five </span> centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <img src="/img/man.svg" alt="man" />
    </div>
  );
}
