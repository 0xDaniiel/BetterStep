import Image from "next/image";
import { Button } from "./ui/button";

const cryptoImages = [
  {
    id: 1,
    source: "/images/bnb.svg",
    alt: "bnb",
  },
  {
    id: 2,
    source: "/images/sol.svg",
    alt: "sol",
  },

  {
    id: 3,
    source: "/images/flx.svg",
    alt: "flx",
  },

  {
    id: 4,
    source: "/images/avax.svg",
    alt: "avax",
  },
  {
    id: 5,
    source: "/images/react.svg",
    alt: "react",
  },
  {
    id: 6,
    source: "/images/sui.svg",
    alt: "sui",
  },
  {
    id: 7,
    source: "/images/patho.svg",
    alt: "patho",
  },
  {
    id: 8,
    source: "/images/ruby.svg",
    alt: "ruby",
  },
  {
    id: 9,
    source: "/images/nexus.svg",
    alt: "nexus",
  },

  {
    id: 10,
    source: "/images/hex.svg",
    alt: "hex",
  },
  {
    id: 11,
    source: "/images/harmony.svg",
    alt: "harmony",
  },
];

const Hero = () => {
  return (
    <div className="text-white text-center mt-40">
      <h1
        className="text-5xl font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, purple 30%, yellow 50%,  red 100%)",
        }}
      >
        Swift Blockchain Revolution
      </h1>
      <p className="text-center text-2xl py-3 max-w-5xl mx-auto">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run, or exercise to earn.
        Each step matters.
      </p>

      <section className="flex items-center gap-5 justify-center my-6">
        <Button className="cursor-pointer px-5 py-5 bg-white/10">
          <Image
            alt="play-store"
            src={"/images/playstore.svg"}
            width={30}
            height={30}
          />
          Play store
        </Button>

        <Button className="bg-gray-300  text-black  hover:bg-white cursor-pointer px-5 py-5">
          <Image
            alt="app-store"
            src={"/images/apple.svg"}
            width={25}
            height={25}
          />
          App store
        </Button>
      </section>

      <section className="my-32 flex flex-col items-center gap-5">
        <div className="flex justify-center gap-5">
          {cryptoImages.slice(0, 6).map((image) => (
            <Image
              key={image.id}
              src={image.source}
              alt={image.alt}
              width={100}
              height={100}
              className="w-[100px] h-[100px] cursor-pointer px-4 py-4 bg-white/10 rounded-xl backdrop-blur-md"
            />
          ))}
        </div>
        <div className="flex justify-center gap-5">
          {cryptoImages.slice(6, 11).map((image) => (
            <Image
              key={image.id}
              src={image.source}
              alt={image.alt}
              width={100}
              height={100}
              className="w-[100px] h-[100px] cursor-pointer px-4 py-4 bg-white/10 rounded-xl backdrop-blur-md"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
