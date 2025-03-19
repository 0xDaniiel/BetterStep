import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Stats from "@/components/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Make sure text is always in front */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>

      {/* Smaller, more concentrated yellow glow in the center */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[30%] h-[30%] bg-yellow-400 rounded-full blur-[80px] opacity-40"></div>

        {/* Image perfectly centered ABOVE the blur */}
        <Image
          src="/images/tick.svg"
          alt="Green tick"
          width={120}
          height={120}
          className="absolute"
        />
      </div>

      {/* Slightly wider purple glow, still subtle */}
      <div className="absolute top-0 left-0 w-[30%] h-[25%] bg-purple-700 rounded-full blur-[100px] opacity-50 z-0"></div>

      {/* <Stats /> */}
    </div>
  );
}
