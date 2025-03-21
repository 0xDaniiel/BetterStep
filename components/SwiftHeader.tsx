import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const links = [
  {
    id: 1,
    title: "Home",
    route: "/",
  },
  {
    id: 2,
    title: "Features",
    route: "/swift/features",
  },
  { id: 3, title: "Career", route: "/swift/career" },
];

const SwiftHeader = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 backdrop-blur-md bg-white/10 shadow-md w-[95%] max-w-7xl rounded-full px-5 py-2 text-white md:w-full">
      <div className="flex flex-wrap justify-between items-center w-full gap-3 md:flex-nowrap">
        <Image
          src="/images/swift.svg"
          alt="Swift logo"
          width={30}
          height={30}
          className="w-8 h-8"
        />
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="text-gray-300 hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwiftHeader;
