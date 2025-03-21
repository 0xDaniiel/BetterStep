import Image from "next/image";
import { Button } from "./ui/button";

const userStats = [
  {
    id: 1,
    value: "+112,256.00",
    unit: "Kcal",
    description: "Calories burnt",
    image: "/images/scale.svg",
  },
  {
    id: 2,
    value: "+42.75",
    unit: "Kilometer (Km)",
    description: "Distance Covered",
    image: "/images/distance.svg",
  },

  {
    id: 3,
    value: "+98,120.50",
    unit: "Steps",
    description: "Total Steps",
    image: "/images/users.svg",
  },
  {
    id: 3,
    value: "+42.75",
    unit: "Km",
    description: "Distance Covered",
    image: "/images/users.svg",
  },
  {
    id: 4,
    value: "+7h 30m",
    unit: "Time",
    description: "Active Time",
    image: "/images/hot.svg",
  },
];

const Stats = () => {
  return (
    <div className="text-white text-center mt-20 px-4 md:mt-40">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 max-w-6xl mx-auto">
        {userStats.map((stat) => (
          <div
            key={stat.id}
            className="relative p-5 bg-white/10 rounded-xl backdrop-blur-md text-left flex flex-col gap-2 overflow-hidden"
          >
            <h2
              className="text-lg md:text-xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, purple 30%, yellow 50%, red 100%)",
              }}
            >
              {stat.value}
            </h2>
            <p className="text-gray-500 text-base">{stat.unit}</p>
            <p className="text-white text-base">{stat.description}</p>
            <div className="absolute top-0 right-0 w-[70px] h-[70px] flex items-center justify-center bg-white/20 rounded-full">
              <Image
                alt={stat.unit}
                src={stat.image}
                width={40}
                height={40}
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Stats;
