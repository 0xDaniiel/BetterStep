import Image from "next/image";
import React from "react";
import NftTable from "./NftTable";

const NftSection = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center  text-center">
      <h1 className="text-3xl md:text-4xl font-bold py-1">Rarity Level</h1>
      <p>More information about the rarity level of NFTs</p>

      <Image
        src="/images/raritycolors.svg"
        width={400}
        height={400}
        alt="NFT"
      />

      <NftTable />
    </div>
  );
};

export default NftSection;
