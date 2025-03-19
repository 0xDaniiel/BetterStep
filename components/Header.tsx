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
          {links.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="text-gray-300  hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Button className="bg-gray-300 rounded-full text-black  hover:bg-white  cursor-pointer ">
          Launch App
        </Button>
      </div>
    </div>
  );
};
export default Header;
