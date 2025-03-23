"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "Features", route: "/swift/features" },
  { id: 3, title: "Career", route: "/swift/career" },
];

const SwiftHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 backdrop-blur-md bg-white/10 shadow-md w-[95%] max-w-7xl rounded-full px-5 py-2 text-white md:w-full">
      <div className="flex justify-between items-center w-full gap-3">
        <Image
          src="/images/swift.svg"
          alt="Swift logo"
          width={30}
          height={30}
          className="w-8 h-8"
        />

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black backdrop-blur-md shadow-md rounded-lg p-4 md:hidden">
          {links.map((link) => (
            <Link
              href={link.route}
              key={link.id}
              className="block py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwiftHeader;
