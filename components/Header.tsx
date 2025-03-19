import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 backdrop-blur-md bg-white/10 shadow-md w-full max-w-7xl rounded-full px-5 py-2 text-white ">
      <div className="flex justify-between items-center w-full">
        <Image
          src="/images/swift.svg"
          alt="Swift logo"
          width={30}
          height={30}
        />
        <div className="flex items-center space-x-6">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Career</Link>
        </div>
        <Button className="bg-gray-300 rounded-full text-black">
          Launch App
        </Button>
      </div>
    </div>
  );
};
export default Header;
