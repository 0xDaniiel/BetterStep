import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl md:text-3xl font-bold text-white py-5  text-center">
        Earn while walking
      </h1>
      <Image
        src="/images/steps.svg"
        alt="roadmap"
        width={1000}
        height={1000}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default RoadMap;
