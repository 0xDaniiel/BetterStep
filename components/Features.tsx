import React from "react";
import { NftCard, SimpleNftCard } from "./NftCards";

const Features = () => {
  return (
    <div className="flex flex-col gap-16 py-10 " id="features">
      <div className="flex flex-col md:flex-row justify-center gap-16 items-center text-white text-center">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Download BetterStep
          </h1>
          <p className="max-w-[450px]">
            Start earning money by walking! Download our app now and convert
            your steps into earnings with our blockchain and
            cryptocurrency-based experience.
          </p>
        </section>

        <NftCard />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-16 items-center text-white text-center ">
        <SimpleNftCard />

        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            <h1>Walk, earn, thrive</h1>
          </h1>
          <p className="max-w-[450px]">
            The earned rewards are distributed equally in $BTT and $BFF tokens.
            Our goal is to provide users with a fun, rewarding, and innovative
            experience. Discover our project now and turn your steps into
            earnings.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Features;
