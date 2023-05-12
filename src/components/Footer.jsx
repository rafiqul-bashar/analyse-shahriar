import React from "react";

export default function Footer() {
  return (
    <>
      <div className="py-8 bg-black flex items-center justify-center w-full">
        <div className="container flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-[20px] ">Logo</p>
          </div>
          <div className="flex items-center space-x-12 text-[#A5A5A5] text-[16px]">
            <h5>About Us</h5>
            <h5>Terms & Condition</h5>
            <h5>Privacy Policy</h5>
            <h5>Refund Policy</h5>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#171717] w-full py-4">
        <p className="text-white text-sm">
          2023 copyright. All rights reserved
        </p>
      </div>
    </>
  );
}
