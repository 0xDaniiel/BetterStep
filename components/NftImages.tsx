import React from "react";
import Image from "next/image";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import CountdownTimer from "./CountdownTimer";
import { Button } from "./ui/button";

export function NftCard() {
  const details = [
    { title: "Price", value: "0.1 ETH" },
    { title: "Ends In", value: <CountdownTimer /> },
    { title: "Highest Bid", value: "0.8 ETH" },
  ];

  return (
    <div className="text-white">
      {/* blue card */}
      <section className="bg-[#5036B9] flex flex-col items-center py-5 gap-5 rounded-xl">
        <h1 className="text-2xl md:text-3xl font-bold">Better #216</h1>
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/images/conan.svg"
            alt="Conan NFT"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="absolute top-[-10px] right-0 w-[60px] h-[60px] bg-white/10 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-md">
            <Image
              src="/images/swift.svg"
              alt="Swift Logo"
              width={50}
              height={50}
              className="rounded-full p-2"
            />
          </div>
        </div>
      </section>

      {/* gray card */}
      <section className="bg-gray-500 backdrop-blur-xl opacity-80 rounded-xl px-5 py-5 -mt-10">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-base md:text-xl font-bold">Better #216</h2>
          <p className="flex items-center gap-1 text-base bg-white/10 backdrop-blur-md px-3 py-1 shadow-sm shadow-gray-400 rounded-full">
            <CiHeart /> 116
          </p>
        </div>

        <div className="flex justify-between items-center mt-10 gap-8 text-center">
          {details.map((item, index) => (
            <div key={index}>
              <h2 className="text-base">{item.title}</h2>
              <p className="text-[0.7rem] font-extralight">{item.value}</p>
              <hr className="border-gray-400  shadow-2xl my-2" />
            </div>
          ))}
        </div>

        <div className="flex gap-5 items-center justify-center mt-3">
          <Button className="bg-gray-900 text-white rounded-full px-7 py-3   hover:bg-black cursor-pointer ">
            Bid
          </Button>

          <Button className="bg-blue-500 text-white rounded-full px-7 py-3   hover:bg-blue-700 cursor-pointer ">
            Buy
          </Button>
        </div>
      </section>
    </div>
  );
}

export function SimpleNftCard() {
  return (
    <div className="">
      <div className="relative w-fit">
        {/* Top Section */}
        <section className="absolute top-2 left-0 w-full flex justify-between items-center px-5 py-2">
          <p className="flex items-center gap-1 text-base bg-white/10 backdrop-blur-md px-3 py-1 shadow-gray-400 rounded-full">
            <IoChevronBackSharp />
            Back
          </p>

          <p className="flex items-center gap-1 text-base bg-white/10 backdrop-blur-md px-3 py-1 shadow-gray-400 rounded-full">
            <CiHeart /> 114
          </p>
        </section>

        {/* NFT Image */}
        <Image
          src="/images/nonconan.svg"
          alt="NOnConan NFT"
          width={350}
          height={350}
          className="rounded-t-lg"
        />

        {/* Bottom Centered Buttons */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-5 items-center py-5">
          <p className="flex items-center gap-1  text-red-700 text-base bg-white/10 backdrop-blur-md px-3 py-1  shadow-md border rounded-full">
            <FaRegCircle /> Common
          </p>

          <p className="flex items-center gap-1 text-base bg-white/10 backdrop-blur-md px-3 py-1  shadow-md border rounded-full text-nowrap">
            0.08 ETH
          </p>
        </div>
      </div>

      {/* gray card */}
      <section className="bg-gray-500 opacity-60 backdrop-blur-md rounded-b-xl px-5 py-5 ">
        <div className="flex justify-between items-center">
          {/* Avatar & User Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
              <CiUser size={24} />
            </div>

            {/* Username & Followers */}
            <div>
              <h2 className="text-base md:text-xl font-bold">@BetterStep</h2>
              <p className="text-sm ">12.5K Followers</p>
            </div>
          </div>

          {/* Follow Button */}
          <Button className="hover:bg-black text-white px-5 py-2 rounded-full bg-gray-950 cursor-pointer">
            Follow
          </Button>
        </div>

        <p className="text-base text-black text-wrap  max-w-[300px] py-4 font-light">
          Turn your steps into earnings and create your art-filled collection
          with our Shoe NFTs.
        </p>

        <div className="flex gap-5 items-center justify-center mt-3">
          <Button className="bg-gray-900 text-white rounded-full px-7 py-3   hover:bg-black cursor-pointer ">
            Bid
          </Button>

          <Button className="bg-blue-500 text-white rounded-full px-7 py-3   hover:bg-blue-700 cursor-pointer ">
            Buy
          </Button>
        </div>
      </section>
    </div>
  );
}
