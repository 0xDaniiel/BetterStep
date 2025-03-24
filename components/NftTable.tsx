import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const rarityLevels = [
  { rarity: "Common", color: "#F05555", name: "Stone", supply: "10,000" },
  { rarity: "Uncommon", color: "#FFBF1C", name: "Emerald", supply: "5,000" },
  { rarity: "Rare", color: "#3790FA", name: "Sapphire", supply: "1,000" },
  {
    rarity: "Legendary",
    color: "#16ED52",
    name: "Dragon's Hoard",
    supply: "100",
  },
];

const NftTable = () => {
  return (
    <Table className="border-separate border-spacing-0 text-gray-100 text-center">
      {/* <TableCaption>A list of rarity levels.</TableCaption> */}
      <TableHeader className="border-b border-gray-700 ">
        <TableRow>
          {["Rarity", "Color", "Name", "Supply"].map((head) => (
            <TableHead
              key={head}
              className="border-r border-gray-700 last:border-none p-2 border-b text-2xl text-gray-100  text-center "
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rarityLevels.map(({ rarity, color, name, supply }) => (
          <TableRow
            key={rarity}
            className="[&>*:not(:last-child)]:border-r [&>*]:border-gray-700  text-base"
          >
            <TableCell className="font-medium">{rarity}</TableCell>
            <TableCell>
              <div
                className="w-6 h-6 mx-auto rounded-full backdrop-blur-md opacity-75"
                style={{ backgroundColor: color }}
              />
            </TableCell>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell className="font-medium">{supply}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NftTable;
