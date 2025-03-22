import Image from "next/image";

const userStats = [
  {
    id: 1,
    value: "+112,256.00",
    unit: "Kcal",
    description: "Calories burnt",
    image: "images/hot.svg",
    gradient: "linear-gradient(to right, yellow, red)",
  },
  {
    id: 2,
    value: "+42.75",
    unit: "Meter (m)",
    description: "Distance Covered",
    image: "images/distance.svg",
    gradient: "linear-gradient(to right, white, blue, blue, blue)",
  },
  {
    id: 3,
    value: "+16,120.50",
    unit: "Kilogram (KG)",
    description: "Total Weight",
    image: "images/scale.svg",
    gradient: "linear-gradient(to right, green, white)",
  },
  {
    id: 4,
    value: "+12,600.00",
    unit: "Users",
    description: "Total users",
    image: "images/users.svg",
    gradient: "linear-gradient(to right, yellow, white)",
  },
];

const Stats = () => {
  return (
    <div className="text-white text-center mt-16 px-4 md:mt-32">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-10 max-w-6xl mx-auto">
        {userStats.map((stat) => (
          <div
            key={stat.id}
            className="relative p-5 bg-white/10 rounded-xl backdrop-blur-md text-left flex flex-col justify-between gap-2 h-auto min-h-[200px]"
          >
            <div>
              <h2
                className="text-lg md:text-xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage: stat.gradient,
                }}
              >
                {stat.value}
              </h2>
              <p className="text-gray-500 text-xl md:text-ellipsis">
                {stat.unit}
              </p>
              <p className="text-white text-xl py-3 md:text-2xl">
                {stat.description}
              </p>
            </div>

            {/* Circular Icon Positioned Outside */}
            <div className="absolute -top-8 -right-8 w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center shadow-lg">
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
