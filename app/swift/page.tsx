import SwiftHeader from "@/components/SwiftHeader";
// import Stats from "@/components/Stats";
import Image from "next/image";
import SwiftHero from "@/components/Swifthero";
import Download from "@/components/Download";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Make sure text is always in front */}
      <div className="relative z-10">
        <SwiftHeader />
        <SwiftHero />
        <Download />
      </div>
      {/* Larger, softer yellow glow moved down */}
      <div className="absolute inset-0 flex items-end justify-center z-0 pb-20">
        <div className="w-[50%] h-[40%] bg-yellow-400 rounded-full blur-[120px] opacity-25"></div>
      </div>

      {/* Slightly wider purple glow, still subtle */}
      <div className="absolute top-0 left-0 w-[30%] h-[25%] bg-purple-700 rounded-full blur-[100px] opacity-50 z-0"></div>

      {/* <Stats /> */}
    </div>
  );
}
