import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <div className="flex justify-center items-center mt-10 md:mt-20 px-4">
      <Image
        src="/images/earn.svg"
        alt="roadmap"
        width={1000}
        height={1000}
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default RoadMap;
