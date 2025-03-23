import Image from "next/image";
import { Button } from "./ui/button";

const SwiftHero = () => {
  return (
    <div className="text-white text-center mt-20 px-4 md:mt-40 ">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Earn by Moving
      </h1>
      <p className="text-lg md:text-2xl py-3 max-w-5xl mx-auto">
        Take a step towards a more rewarding lifestyle. Walk, run, or
        exercise—and turn your steps into real value.
      </p>

      <section className="flex flex-col md:flex-row items-center gap-5 justify-center my-6">
        <Button className="cursor-pointer px-5 py-5 shadow-md bg-white/10 flex items-center gap-2 hover:bg-white/8">
          <Image
            alt="play-store"
            src="/images/playstore.svg"
            width={25}
            height={25}
          />
          <span>Play Store</span>
        </Button>

        <Button className="bg-gray-100 flex items-center text-black hover:bg-white cursor-pointer px-5 py-3 gap-2">
          <Image
            alt="app-store"
            src="/images/apple.svg"
            width={20}
            height={20}
          />
          <span>App Store</span>
        </Button>
      </section>
    </div>
  );
};

export default SwiftHero;
