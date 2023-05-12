import React from "react";

export default function FetureSection() {
  return (
    <section className="bg-white container py-32  mx-auto">
      <div className="grid grid-cols-2 mt-44 ">
        <div className="space-y-6">
          <h2 className=" font-semibold text-[32px]">
            Looking for Enterprise solution!
          </h2>
          <h4 className="text-[20px] font-normal">
            Have a look what we are offering!
          </h4>
          <p className="text-light-gray text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <ul className="list-disc text-[16px] text-light-gray px-12">
            <li>It is a long established fact that a reader</li>
            <li>will be distracted by the readable content of a page</li>
            <li>when looking at its layout</li>
            <li>The point of using Lorem Ipsum is</li>
            <li>that it has a more-or-less normal</li>
            <li>distribution of letters, as opposed to using </li>
            <li>'Content here, content here', making</li>

            <li>The point of using Lorem Ipsum is</li>
          </ul>
        </div>
        <img src="/img/statisticsBoard.svg" alt="statistics_Board" />
      </div>
    </section>
  );
}
