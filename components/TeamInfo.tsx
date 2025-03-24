import React from "react";

const TeamInfo = () => {
  const teamMembers = [
    { name: "John Doe", role: "Engineering Lead" },
    { name: "Jane Smith", role: "Community Manager" },
    { name: "Michael Brown", role: "Project Manager" },
  ];

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold py-1  text-white text-center">
        Our Team{" "}
      </h1>

      <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full px-5 py-5">
        {teamMembers.map((member, index) => (
          <section
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg w-full md:flex-1 min-h-[250px] flex flex-col justify-end items-center"
          >
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
