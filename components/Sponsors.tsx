import React from "react";
import Image from "next/image";

const cryptoImages = [
  { id: 1, source: "/images/bnb.svg", alt: "bnb" },
  { id: 2, source: "/images/sol.svg", alt: "sol" },
  { id: 3, source: "/images/flx.svg", alt: "flx" },
  { id: 4, source: "/images/avax.svg", alt: "avax" },
  { id: 5, source: "/images/react.svg", alt: "react" },
  { id: 6, source: "/images/sui.svg", alt: "sui" },
  { id: 7, source: "/images/patho.svg", alt: "patho" },
  { id: 8, source: "/images/ruby.svg", alt: "ruby" },
  { id: 9, source: "/images/nexus.svg", alt: "nexus" },
  { id: 10, source: "/images/hex.svg", alt: "hex" },
  { id: 11, source: "/images/harmony.svg", alt: "harmony" },
];

const Sponsors = () => {
  return (
    <section className="my-16 md:my-32 flex flex-col items-center gap-5">
      <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto">
        {cryptoImages.map((image) => (
          <Image
            key={image.id}
            src={image.source}
            alt={image.alt}
            width={80}
            height={80}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] cursor-pointer px-4 py-4 bg-white/10 rounded-xl backdrop-blur-md"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
