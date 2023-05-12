import React from "react";

export default function VideoPlayer() {
  return (
    <div className="w-full mx-auto max-w-[1280px] h-[560px] bg-white shadow-xl flex items-center justify-center">
      <img
        src="/img/play.svg"
        alt="paly_button"
        className="h-[70px] w-[70px]"
      />
    </div>
  );
}
