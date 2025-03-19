import Image from "next/image";
import { Button } from "./ui/button";

const cryptoImages = [
  {
    id: 1,
    source: "/images/bnb.svg",
    alt: "bnb",
  },
];

const Hero = () => {
  return (
    <div className="text-white text-center pt-36">
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

      <section className="flex items-center gap-5 justify-center">
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

      <section className="flex justify-center items-center  gap-6 my-16">
        <Image
          alt="play-store"
          src={"/images/bnb.svg"}
          width={50}
          height={50}
          className="cursor-pointer p-[0.30rem] bg-white/10  rounded-xl backdrop-blur-md"
        />
      </section>
    </div>
  );
};

export default Hero;
