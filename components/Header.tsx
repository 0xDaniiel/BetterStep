import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 backdrop-blur-md bg-white/10 shadow-md w-[95%] max-w-7xl rounded-full px-5 py-2 text-white md:w-full">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/images/swift.svg"
          alt="Swift logo"
          width={30}
          height={30}
          className="w-8 h-8"
        />

        <Link
          href={"/about"}
          className="bg-gray-100 rounded-full text-black hover:bg-white cursor-pointer px-4 py-1 md:px-6 md:py-2"
        >
          Launch App
        </Link>
      </div>
    </div>
  );
};

export default Header;
