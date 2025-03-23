import SwiftHeader from "@/components/SwiftHeader";
import SwiftHero from "@/components/Swifthero";
import Download from "@/components/Download";
import NftSection from "@/components/NftSection";
import Stats from "@/components/Stats";
import RoadMap from "@/components/RoadMap";


export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative z-10 px-6 flex flex-col gap-6">
        <SwiftHeader />
        <SwiftHero />
        <Stats />
        <RoadMap />
        <Download />

        {/* <NftSection /> */}
      </div>
      <div className="absolute inset-0 flex items-end justify-center z-0 pb-20">
        <div className="w-[50%] h-[40%] bg-yellow-400 rounded-full blur-[120px] opacity-25"></div>
      </div>

      <div className="absolute top-0 left-0 w-[30%] h-[25%] bg-purple-700 rounded-full blur-[100px] opacity-50 z-0"></div>
    </div>
  );
}
