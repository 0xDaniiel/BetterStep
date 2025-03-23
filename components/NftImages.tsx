import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import CountdownTimer from "./CountdownTimer";

export function NftImages() {
  return (
    <div className="text-white  ">
      <section className="bg-[#5036B9] flex-col flex items-center p-5 pb-10 gap-5 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white bg-clip-text">
          Better #216
        </h1>
        <div className="relative w-[200px] h-[200px]">
          {/* Conan Image */}
          <Image
            src={"/images/conan.svg"}
            alt="conan"
            height={200}
            width={200}
            className="rounded-lg"
          />

          {/* Swift Image in Bubble */}
          <div className="absolute top-[-10px] right-0 w-[60px] h-[60px] bg-white/10 rounded-full shadow-2xl flex items-center justify-center  backdrop-blur-md">
            <Image
              src={"/images/swift.svg"}
              alt="swift"
              height={50}
              width={50}
              className="rounded-full p-2"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-500 backdrop-blur-2xl  opacity-80 p-5 rounded-xl -mt-10">
        <section className="flex justify-between items-center text-white mt-10  ">
          <h2 className="text-base md:text-xl font-bold text-wite bg-clip-text">
            Better #216
          </h2>
          <p className="flex items-center gap-1 text-base bg-white/10 backdrop-blur-md px-3  py-1 shadow-sm shadow-gray-400 rounded-full">
            <CiHeart />
            116
          </p>
        </section>

        <section className="flex justify-between items-center text-white mt-10 text-center">
          <div>
            <h2 className="text-base md:text-xl font-bold text-wite bg-clip-text">
              Price
            </h2>

            <p className="">0.1 ETH</p>
          </div>

          <div>
            <h2 className="text-base md:text-xl font-bold text-wite bg-clip-text">
              Ends In
            </h2>

            <CountdownTimer />
          </div>

          <div>
            <h2 className="text-base md:text-xl font-bold text-wite bg-clip-text">
              highest bid
            </h2>

            <p className="">0.8 ETH</p>
          </div>
        </section>
      </section>
    </div>
  );
}

export function NftImages2() {
  return (
    <div>
      <div>
        <section className="bg-[#5036B9] flex-col flex items-center justify-cente p-5 gap-5 rounded-xl">
          <h1 className="text-2xl md:text-3xl font-bold text-white bg-clip-text">
            Better #216
          </h1>
          <div className="relative w-[200px] h-[200px]">
            {/* Conan Image */}
            <Image
              src={"/images/conan.svg"}
              alt="conan"
              height={200}
              width={200}
              className="rounded-lg"
            />

            {/* Swift Image in Bubble */}
            <div className="absolute top-[-10px] right-0 w-[60px] h-[60px] bg-white/10 rounded-full shadow-2xl flex items-center justify-center  backdrop-blur-md">
              <Image
                src={"/images/swift.svg"}
                alt="swift"
                height={50}
                width={50}
                className="rounded-full p-2"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
