import React from "react";
import { NftImages } from "./NftImages";
import CountdownTimer from "./CountdownTimer";

const Download = () => {
  return (
    <div className="p-5">
      <div className="md:flex justify-between grid  text-white">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white bg-clip-text">
            Download BetterStep
          </h1>
          <p>
            Start earning money by walking! Download our app now and convert
            your steps into earnings with our blockchain and
            cryptocurrency-based experience.
          </p>
        </section>

        {/* <CountdownTimer /> */}

        <NftImages />
      </div>

      {/* <div className="md:flex justify-between grid  text-white">
        <section>
          <Image
            src={"/images/conan.svg"}
            alt="conan"
            height={200}
            width={200}
          />
        </section>

        <section>
          <h1>Walk, earn, thrive</h1>
          <p>
            The earned rewards are distributed equally in $BTT and $BFF tokens.
            Our goal is to provide users with a fun, rewarding, and innovative
            experience. Discover our project now and turn your steps into
            earnings.
          </p>
        </section>
      </div> */}
    </div>
  );
};

export default Download;
