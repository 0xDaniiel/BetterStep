import Image from "next/image";
import { Button } from "./ui/button";
import Stats from "./Stats";
import RoadMap from "./RoadMap";

const SwiftHero = () => {
  return (
    <div className="text-white text-center mt-20 px-4 md:mt-40 ">
      <h1
        className="text-4xl md:text-6xl font-bold text-white bg-clip-text"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to right, purple 30%, yellow 50%, red 100%)",
        // }}
      >
        Earn to move
      </h1>
      <p className="text-lg md:text-2xl py-3 max-w-5xl mx-auto">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run, or exercise to earn.
        Each step matters.
      </p>

      <section className="flex flex-col md:flex-row items-center gap-5 justify-center my-6">
        <Button className="cursor-pointer px-5 py-3 bg-white/10 flex items-center gap-2">
          <Image
            alt="play-store"
            src="/images/playstore.svg"
            width={25}
            height={25}
          />
          Play Store
        </Button>

        <Button className="bg-gray-300 flex items-center text-black hover:bg-white cursor-pointer px-5 py-3 gap-2">
          <Image
            alt="app-store"
            src="/images/apple.svg"
            width={25}
            height={25}
          />
          App Store
        </Button>
      </section>

      <Stats />
      <RoadMap />
    </div>
  );
};

export default SwiftHero;
