import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="py-8 bg-dark-gray flex items-center justify-center w-full text-white">
      <nav className="container flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className=" font-bold text-[22px] ">Logo</p>
          <p className="text-[#C6C6C6]">A great tagline goes here</p>
        </div>
        <div className="flex items-center space-x-12 text-[16px]">
          <Link to="#">
            <h6>Enterprise</h6>
          </Link>
          <Link to="#">
            <h6>Pricing</h6>
          </Link>
          <Link to="#">
            <h6>Resource</h6>
          </Link>
          <Link to="#">
            <h6>Faq</h6>
          </Link>
          <Link to="#">
            <h6 className="px-[30px] py-[10px] bg-white text-black font-semibold">
              Analyse
            </h6>
          </Link>
        </div>
      </nav>
    </header>
  );
}
